package com.gdsc.backend.oauth2.jwt;


import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
@Builder
public class Token {
    private String roleType;
    private String token;
    private String refreshToken;
}

