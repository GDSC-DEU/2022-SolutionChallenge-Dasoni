package com.gdsc.backend.config;

import com.gdsc.backend.config.properties.CorsProperties;
import com.gdsc.backend.oauth2.CustomOAuth2UserService;
import com.gdsc.backend.oauth2.OAuth2SuccessHandler;
import com.gdsc.backend.oauth2.jwt.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final TokenProvider tokenProvider;
    private final CorsProperties corsProperties;
    private final OAuth2SuccessHandler successHandler;
    private final CustomOAuth2UserService oAuth2UserService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .formLogin().disable() // The form login method is disable because the OAuth2 login will be used.
                .httpBasic().disable()
                .headers().frameOptions().disable()

                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                .and()
                .cors().configurationSource(corsConfigurationSource())

                .and()
                .authorizeRequests()
                .antMatchers( "/swagger-ui/**", "/swagger-resources/**", "/v3/api-docs").permitAll() // About Swagger UI
                .antMatchers("/api/diaries/**").permitAll()
                .anyRequest().authenticated()

                .and()
                .oauth2Login()
                .successHandler(successHandler)
                .userInfoEndpoint().userService(oAuth2UserService);
//                .authorizationEndpoint()
//                .baseUri("/oauth2/authorization")
//                .authorizationRequestRepository();
    }

    @Bean
    public UrlBasedCorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource corsConfigurationSource = new UrlBasedCorsConfigurationSource();

        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedHeaders(Arrays.asList(corsProperties.getAllowedHeaders().split(",")));
        configuration.setAllowedMethods(Arrays.asList(corsProperties.getAllowedMethods().split(",")));
        configuration.setAllowedOrigins(Arrays.asList(corsProperties.getAllowedOrigins().split(",")));
        configuration.setAllowCredentials(true);
        configuration.setMaxAge(configuration.getMaxAge());

        corsConfigurationSource.registerCorsConfiguration("/**", configuration);
        return corsConfigurationSource;
    }
}
