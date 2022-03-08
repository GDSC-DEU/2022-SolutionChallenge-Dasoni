package com.gdsc.backend.entity.enums;

import io.swagger.models.HttpMethod;

public enum SocialType {
    GOOGLE(
            "google",
            "https://oauth2.googleapis.com/token",
            HttpMethod.POST
    );

    private String value;
    private String tokenUrl;
    private HttpMethod method;

    SocialType(String value, String tokenUrl, HttpMethod method) {
        this.value = value;
        this.tokenUrl = tokenUrl;
        this.method = method;
    }

    public String getSocialName() { return value; }

    public String getTokenUrl() { return tokenUrl; }

    public HttpMethod getMethod() { return method; }
}
