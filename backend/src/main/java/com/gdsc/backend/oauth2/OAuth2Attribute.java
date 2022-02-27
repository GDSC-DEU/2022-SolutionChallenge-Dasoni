package com.gdsc.backend.oauth2;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.util.Map;

@ToString
@Builder(access = AccessLevel.PRIVATE)
@Getter
public class OAuth2Attribute {
    private Map<String, Object> attributes;
    private String provider;
    private String attributeKey;
    private String email;
    private String name;
    private String picture;

    static OAuth2Attribute of(String provider, String attributeKey, Map<String, Object> attributes) {
        if ("google".equals(provider)) {
            return ofGoogle(provider, attributeKey, attributes);
        }
        throw new RuntimeException();
    }

    private static OAuth2Attribute ofGoogle(String provider, String attributeKey, Map<String, Object> attributes) {
        return OAuth2Attribute.builder()
                .provider(provider)
                .name((String) attributes.get("name"))
                .email((String) attributes.get("email"))
                .picture((String)attributes.get("picture"))
                .attributes(attributes)
                .attributeKey(attributeKey)
                .build();
    }

}
