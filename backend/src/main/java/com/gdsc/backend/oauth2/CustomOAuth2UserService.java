package com.gdsc.backend.oauth2;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gdsc.backend.entity.enums.SocialType;
import com.gdsc.backend.oauth2.dto.AccessTokenSocialTypeToken;
import com.gdsc.backend.oauth2.dto.GoogleIdToken;
import com.gdsc.backend.oauth2.dto.OAuth2AccessTokenAttribute;
import com.gdsc.backend.oauth2.dto.OAuth2UserDetails;
import com.gdsc.backend.oauth2.strategy.GoogleLoadStrategy;
import com.gdsc.backend.oauth2.strategy.SocialLoadStrategy;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.stereotype.Service;

import java.util.Base64;


@Slf4j
@Service
public class CustomOAuth2UserService {
    private final ObjectMapper objectMapper;

    @Autowired
    public CustomOAuth2UserService(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public Object getAccessToken(AccessTokenSocialTypeToken authentication, ClientRegistrationRepository clientRegistrationRepository) {
        SocialType socialType = authentication.getSocialType();

        SocialLoadStrategy socialLoadStrategy = getSocialLoadStrategy(socialType, clientRegistrationRepository);
        return socialLoadStrategy.getSocialAccessCode(authentication.getCode(), authentication.getRedirect_url());
    }

    @SneakyThrows
    public OAuth2UserDetails getOAuth2UserDetails(SocialType socialType, OAuth2AccessTokenAttribute response) {
        String[] chunks = response.getIdToken().split("\\.");
        Base64.Decoder decoder = Base64.getDecoder();
        String payload = new String(decoder.decode(chunks[1]));
        GoogleIdToken decodeIdToken = objectMapper.readValue(payload, GoogleIdToken.class);

        return OAuth2UserDetails.builder()
                .principal(decodeIdToken.getSub())
                .socialType(socialType)
                .username(decodeIdToken.getEmail())
                .build();
    }

    private SocialLoadStrategy getSocialLoadStrategy(SocialType socialType, ClientRegistrationRepository clientRegistrationRepository) {
        if (socialType == SocialType.GOOGLE) {
            return new GoogleLoadStrategy(clientRegistrationRepository);
        } else {
            throw new IllegalArgumentException("지원하지 않는 로그인 형식입니다");
        }
    }
}