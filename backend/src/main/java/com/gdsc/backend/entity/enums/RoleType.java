package com.gdsc.backend.entity.enums;

public enum RoleType {
    USER("ROLE_USER"),
    GUEST("ROLE_GUEST"),
    ADMIN("ROLE_ADMIN");


    private String grantedAuthority;

    RoleType(String grantedAuthority) {
        this.grantedAuthority = grantedAuthority;
    }

    public String getGrantedAuthority() {
        return grantedAuthority;
    }
}
