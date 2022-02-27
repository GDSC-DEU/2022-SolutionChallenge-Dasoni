package com.gdsc.backend.entity;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.Collection;
import java.util.Set;
import java.util.UUID;

@Schema(description = "사용자")
@Getter
@RequiredArgsConstructor
@Entity
@EntityListeners(AuditingEntityListener.class)
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class Users extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    @Schema(description = "사용자 계정 ID", example = "468cc9b5-bca2-494d-9f5c-f00a1af81696")
    private UUID userId;

    @Email
    @Column(unique = true)
    private String email;

    @Column(unique = true)
    private String principal;

    @ManyToMany
    @JoinTable(
            name = "user_authority",
            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "authority_name", referencedColumnName = "authority_name")}
    )
    private Set<Authority> authorities;

    @Builder
    public Users(String email, String principal, Set<Authority> authorities) {
        this.email = email;
        this.principal = principal;
        this.authorities = authorities;
    }
}
