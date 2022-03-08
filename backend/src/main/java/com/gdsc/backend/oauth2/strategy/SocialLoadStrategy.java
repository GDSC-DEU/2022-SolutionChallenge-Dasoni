package com.gdsc.backend.oauth2.strategy;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.core.ParameterizedTypeReference;

import java.util.Collections;
import java.util.Map;

public abstract class SocialLoadStrategy {
    protected ParameterizedTypeReference<Map<String, Object>> RESPONSE_TYPE  =  new ParameterizedTypeReference<>(){};

    protected final RestTemplate restTemplate = new RestTemplate();

    public Object getSocialAccessCode(String accessCode, String redirect_uri) {
        HttpHeaders headers = new HttpHeaders();
        setHeaders(headers);

        MultiValueMap<String, String> body = makeRequestBody(accessCode, redirect_uri);
        body.add("code", accessCode);
        body.add("redirect_uri", redirect_uri);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(body, headers);

        return sendRequestToSocialSite(request);
    }

    public void setHeaders(HttpHeaders headers) {
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
    }

    protected abstract Object sendRequestToSocialSite(HttpEntity<?> request);

    protected abstract MultiValueMap<String, String> makeRequestBody(String accessCode, String redirect_uri);
}
