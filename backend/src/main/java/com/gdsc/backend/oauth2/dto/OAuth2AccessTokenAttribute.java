package com.gdsc.backend.oauth2.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
public class OAuth2AccessTokenAttribute {
    private final String accessToken;
    private final Integer expiredIn;
    private final String scope;
    private final String tokenType;
    private final String idToken;

    @Builder
    public OAuth2AccessTokenAttribute(String accessToken, Integer expiredIn, String scope, String tokenType, String idToken) {
        this.accessToken = accessToken;
        this.expiredIn = expiredIn;
        this.scope = scope;
        this.tokenType = tokenType;
        this.idToken = idToken;
    }
}
