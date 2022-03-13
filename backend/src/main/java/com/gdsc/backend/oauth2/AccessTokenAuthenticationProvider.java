package com.gdsc.backend.oauth2;

import com.gdsc.backend.repository.UserRepository;
import com.gdsc.backend.entity.Users;
import com.gdsc.backend.entity.enums.RoleType;
import com.gdsc.backend.oauth2.dto.AccessTokenSocialTypeToken;
import com.gdsc.backend.oauth2.dto.OAuth2AccessTokenAttribute;
import com.gdsc.backend.oauth2.dto.OAuth2UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.stereotype.Component;


@Component
public class AccessTokenAuthenticationProvider implements AuthenticationProvider {
    private final CustomOAuth2UserService service;
    private final UserRepository repository;

    private ClientRegistrationRepository clientRegistrationRepository;

    private AccessTokenAuthenticationProvider(CustomOAuth2UserService service, UserRepository repository) {
        this.service = service;
        this.repository = repository;
    }

    @Autowired
    public AccessTokenAuthenticationProvider(CustomOAuth2UserService service, UserRepository repository, ClientRegistrationRepository clientRegistrationRepository) {
        this(service, repository);
        this.clientRegistrationRepository = clientRegistrationRepository;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        OAuth2AccessTokenAttribute response = (OAuth2AccessTokenAttribute) service.getAccessToken((AccessTokenSocialTypeToken) authentication, this.clientRegistrationRepository);
        OAuth2UserDetails oAuth2User = service.getOAuth2UserDetails(((AccessTokenSocialTypeToken) authentication).getSocialType(), response);

        Users user = saveOrGet(oAuth2User);
        oAuth2User.setRoles(user.getRoleType().name());
        oAuth2User.setId(user.getUserId());

        return AccessTokenSocialTypeToken.builder().principal(oAuth2User).authorities(oAuth2User.getAuthorities()).build();
    }

    private Users saveOrGet(OAuth2UserDetails oAuth2User){
        return repository.findBySocialTypeAndPrincipal(oAuth2User.getSocialType(), oAuth2User.getPrincipal())
                .orElseGet(() -> repository.save(Users.builder()
                                .principal(oAuth2User.getPrincipal())
                                .email(oAuth2User.getUsername())
                                .socialType(oAuth2User.getSocialType())
                                .roleType(RoleType.GUEST)
                        .build()));
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return AccessTokenSocialTypeToken.class.isAssignableFrom(authentication);
    }
}
