package com.gdsc.backend.oauth2;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gdsc.backend.entity.Authority;
import com.gdsc.backend.entity.Users;
import com.gdsc.backend.oauth2.jwt.Token;
import com.gdsc.backend.oauth2.jwt.TokenProvider;
import com.gdsc.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collections;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class OAuth2SuccessHandler implements AuthenticationSuccessHandler {
    private final ObjectMapper objectMapper;
    private final TokenProvider tokenProvider;
    private final UserRepository userRepository;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();

        // 최초 로그인시 회원가입처리를 한다.
        Authority authority = Authority.builder().authorityName("ROLE_USER").build();
        Users user = saveOrGet(oAuth2User, authority);

        Token token = tokenProvider.createToken(user.getUserId(), authority.getAuthorityName());
        writeTokenResponse(response, token);
    }

    private Users saveOrGet(OAuth2User oAuth2User, Authority authority) {
        Map<String, Object> attribute = oAuth2User.getAttributes();
        return userRepository.findByPrincipal(oAuth2User.getName())
                .orElseGet(() -> userRepository.save(Users.builder()
                                .principal(oAuth2User.getName())
                                .email(attribute.get("email").toString())
                                .authorities(Collections.singleton(authority))
                                .build()));
    }

    private void writeTokenResponse(HttpServletResponse response, Token token) throws IOException {
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        PrintWriter writer = response.getWriter();
        writer.println(objectMapper.writeValueAsString(token));
        writer.flush();
    }
}
