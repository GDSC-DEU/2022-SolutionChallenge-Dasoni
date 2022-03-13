package com.gdsc.backend.oauth2.jwt;


import com.gdsc.backend.entity.enums.RoleType;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.UUID;
import java.util.stream.Collectors;

/*
 * 이 클래스는 Token 생성을 위한 secret 키와
 * 토큰 만료 시간 설정 및 토큰 생성, 유효성 검사를 위한 클래스이다.
 * @author Jiyoon Bak
 * @version 1.0
 * @see org.springframework.beans.factory.InitializingBean
 */
@Service
public class TokenProvider implements InitializingBean {
    private static final String AUTHORITIES_KEY = "AUTH";

    private final String secret;
    private final Long tokenValidityInMilliseconds;
    private final Long tokenRefreshValidityInMilliseconds;

    private Key key;

    /*
     * 객체가 생성될 때 applcation.yml 파일에서 지정된
     * 시크릿 키값, 토큰 만료 시간, 리프레시 토큰 만료 시간을 초기화한다.
     */
    public TokenProvider(
            @Value("${jwt.secret}") String secret,
            @Value("${jwt.token-validity-in-seconds}") Long tokenValidityInMilliseconds,
            @Value("${jwt.token-refresh-validity-in-seconds}") Long tokenRefreshValidityInMilliseconds) {
        this.secret = secret;
        this.tokenValidityInMilliseconds = tokenValidityInMilliseconds;
        this.tokenRefreshValidityInMilliseconds = tokenRefreshValidityInMilliseconds;
    }

    /*
     * Bean 객체를 초기화할 때 수행될 작업이다.
     * Base64로 인코딩된 키를 디코딩하고 HMAC-SHA 알고리즘을 이용하여 다시 인코딩한다.
     *
     * @see org.springframework.beans.factory.InitializingBean
     */
    @Override
    public void afterPropertiesSet() throws Exception {
        byte[] keyBytes = Decoders.BASE64.decode(secret); // Decoding the secret key encoded with Base64
        this.key = Keys.hmacShaKeyFor(keyBytes); // Encoding the secret key using HMAC-SHA Algorithms
    }

    /*
     * Authentication 객체에 저장된 정보(권한 정보, 사용자 ID값)를 활용하여
     * 토큰을 생성한다.
     *
     * @see org.springframework.security.core.Authentication
     * @return 유저의 권한 정보와 토큰, 리프레시 토큰 값이 지정된 Token 객체
     */
    public Token createToken(UUID id, RoleType roleType) {

        Claims claims = Jwts.claims().setSubject(id.toString());
        claims.put(AUTHORITIES_KEY, roleType.getGrantedAuthority());

        Date now = new Date();

        // 유저의 권한 정보와 토큰, 리프레시 토큰을 반환한다.
        return Token.builder()
                .roleType(roleType.getGrantedAuthority())
                .token(Jwts.builder()
                        .setClaims(claims)
                        .setIssuedAt(now)
                        .signWith(key, SignatureAlgorithm.HS512)
                        .setExpiration(new Date(now.getTime() + this.tokenValidityInMilliseconds))
                        .compact())
                .refreshToken(Jwts.builder()
                        .setClaims(claims)
                        .setIssuedAt(now)
                        .signWith(key, SignatureAlgorithm.HS512)
                        .setExpiration(new Date(now.getTime() + this.tokenRefreshValidityInMilliseconds))
                        .compact())
                .build();
    }

    public Authentication getAuthentication(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();

        Collection<? extends GrantedAuthority> authorities =
                Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toList());

        return new UsernamePasswordAuthenticationToken(claims.getSubject(), token, authorities);
    }

    /*
     * 토큰의 유요성을 확인합니다.
     *
     * @return false
     */
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
            System.out.println("잘못된 JWT 서명입니다.");
        } catch (ExpiredJwtException e) {
            System.out.println("만료된 JWT 토큰입니다.");
        } catch (UnsupportedJwtException e) {
            System.out.println("지원되지 않는 JWT 토큰입니다.");
        } catch (IllegalArgumentException e) {
            System.out.println("JWT 토큰이 잘못되었습니다.");
        }
        return false;
    }
}
