package com.gdsc.backend.oauth2.strategy;

import com.gdsc.backend.oauth2.dto.OAuth2AccessTokenAttribute;
import io.jsonwebtoken.lang.Assert;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import com.gdsc.backend.entity.enums.SocialType;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.OAuth2Error;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;

import java.util.Map;


@Slf4j
public class GoogleLoadStrategy extends SocialLoadStrategy {
    private final ClientRegistrationRepository clientRegistrationRepository;

    public GoogleLoadStrategy(ClientRegistrationRepository clientRegistrationRepository) {
        this.clientRegistrationRepository = clientRegistrationRepository;
    }

    @Override
    protected Object sendRequestToSocialSite(HttpEntity<?> request) {
        try {
            ResponseEntity<Map<String, Object>> response = restTemplate.exchange(
                    SocialType.GOOGLE.getTokenUrl(),
                    HttpMethod.POST,
                    request,
                    RESPONSE_TYPE
            );
            Map<String, Object> body = response.getBody();
            Assert.notNull(body);
            return OAuth2AccessTokenAttribute.builder()
                    .accessToken(body.get("access_token").toString())
                    .expiredIn(Integer.valueOf(body.get("expires_in").toString()))
                    .scope(body.get("scope").toString())
                    .tokenType(body.get("token_type").toString())
                    .idToken(body.get("id_token").toString())
                    .build();
        } catch (HttpClientErrorException e) {
            log.error("유효하지 않는 Access Code 를 사용하였습니다.");
            OAuth2Error oauth2Error = new OAuth2Error(HttpStatus.BAD_REQUEST.getReasonPhrase(), "유효하지 않는 Access Code 를 사용하였습니다.", null);
            throw new OAuth2AuthenticationException(oauth2Error, oauth2Error.toString());
        }
        catch (Exception e) {
            log.error("AccessCode 를 사용하여 Google 유저정보를 받아오던 중 예외가 발생했습니다 {}" ,e.getMessage() );
            throw e;
        }
    }

    @Override
    protected MultiValueMap<String, String> makeRequestBody(String accessCode, String redirect_uri) {
        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        ClientRegistration clientRegistration = this.clientRegistrationRepository.findByRegistrationId(SocialType.GOOGLE.getSocialName());
        body.add("client_id", clientRegistration.getClientId());
        body.add("client_secret", clientRegistration.getClientSecret());
        body.add("grant_type", "authorization_code");
        return body;
    }
}
