package com.gdsc.backend.oauth2.dto;

import com.gdsc.backend.entity.enums.SocialType;
import lombok.Builder;
import lombok.Getter;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

@Getter
public class AccessTokenSocialTypeToken extends AbstractAuthenticationToken {

    private static final long serialVersionUID = 1L;
    private Object principal;

    private String code;
    private String redirect_url;
    private SocialType socialType;

    public AccessTokenSocialTypeToken(String code, String redirect_url, SocialType socialType) {
        super(null);
        this.code = code;
        this.redirect_url = redirect_url;
        this.socialType = socialType;
        setAuthenticated(false);
    }

    /**
     * Creates a token with the supplied array of authorities.
     *
     * @param authorities the collection of <tt>GrantedAuthority</tt>s for the principal
     *                    represented by this authentication object.
     */
    @Builder
    public AccessTokenSocialTypeToken(Object principal, Collection<? extends GrantedAuthority> authorities) {
        super(authorities);
        this.principal = principal;
        super.setAuthenticated(true);
    }

    @Override
    public Object getCredentials() {
        return null;
    }
}
