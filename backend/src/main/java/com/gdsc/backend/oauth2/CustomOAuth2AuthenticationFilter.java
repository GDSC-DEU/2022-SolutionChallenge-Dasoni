package com.gdsc.backend.oauth2;

import com.gdsc.backend.entity.enums.SocialType;
import com.gdsc.backend.oauth2.dto.AccessTokenSocialTypeToken;
import com.gdsc.backend.oauth2.dto.OAuth2UserDetails;
import com.gdsc.backend.oauth2.jwt.TokenProvider;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.OAuth2Error;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.stereotype.Component;
import org.springframework.util.MultiValueMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;

@Component
public class CustomOAuth2AuthenticationFilter extends AbstractAuthenticationProcessingFilter {
    private static final String DEFAULT_FILTER_PROCESSES_URI = "/api/oauth2/login/";

    private static final String HTTP_METHOD = "POST";

    private static final AntPathRequestMatcher DEFAULT_OAUTH2_LOGIN_PATH_REQUEST_MATCHER =
            new AntPathRequestMatcher(DEFAULT_FILTER_PROCESSES_URI+"*", HTTP_METHOD);

    public CustomOAuth2AuthenticationFilter(AccessTokenAuthenticationProvider accessTokenAuthenticationProvider, TokenProvider tokenProvider) {
        super(DEFAULT_OAUTH2_LOGIN_PATH_REQUEST_MATCHER); // 위에서 설정한  "/api/oauth/login/*" 의 요청에, GET 으로 온 요청을 처리하기 위해 설정한다.
        this.setAuthenticationManager(new ProviderManager(accessTokenAuthenticationProvider));
//        this.setAuthenticationSuccessHandler((request, response, authentication) -> {
//
//        });
        this.setAuthenticationSuccessHandler(new OAuth2SuccessHandler(tokenProvider));
//        this.setAuthenticationFailureHandler();
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        MultiValueMap<String, String> params = OAuth2AuthorizationResponseUtils.toMultiMap(request.getParameterMap());

        // params 에 code 혹은 response_uri 가 존재해야 올바른 Response 이다. 그렇지 않으면 OAuth2AuthenticationException 에러를 발생시킨다.
        if (!OAuth2AuthorizationResponseUtils.isAuthorizationResponse(params)) {
            OAuth2Error oAuth2Error = new OAuth2Error("invalid_request");
            throw new OAuth2AuthenticationException(oAuth2Error, oAuth2Error.toString());
        } else {
            // 올바른 요청일 경우
            SocialType socialType = extractSocialType(request); // registration_id를 가져온다. ex) google

            // Authorized Code 와 Redirect Url 값을 가져온다.
            String code = params.get("code").get(0);
            String redirect_url = params.get("redirect_uri").get(0);

            return this.getAuthenticationManager().authenticate(new AccessTokenSocialTypeToken(code, redirect_url, socialType));
        }
    }

    private SocialType extractSocialType(HttpServletRequest request) {
        return Arrays.stream(SocialType.values())
                .filter(socialType -> socialType.getSocialName()
                        .equals(request.getRequestURI().substring(DEFAULT_FILTER_PROCESSES_URI.length())))
                .findFirst()
                .orElseThrow(() -> {
                    // 사용할 수 없는 registration_id 일 경우 에러를 발생시킨다.
                    OAuth2Error oauth2Error = new OAuth2Error(
                            "client_registration_not_found", "Client Registration not found with Id: " +
                            request.getRequestURI().substring(DEFAULT_FILTER_PROCESSES_URI.length()), null);
                    throw new OAuth2AuthenticationException(oauth2Error, oauth2Error.toString());
                });
    }
}
