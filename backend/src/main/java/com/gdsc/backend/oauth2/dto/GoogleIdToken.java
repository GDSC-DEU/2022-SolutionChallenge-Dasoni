package com.gdsc.backend.oauth2.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class GoogleIdToken {
    private String iss;
    private String azp;
    private String aud;
    private String sub;
    private String email;
    private Boolean email_verified;
    private String at_hash;
    private String name;
    private String picture;
    private String given_name;
    private String family_name;
    private String locale;
    private String iat;
    private String exp;
}
