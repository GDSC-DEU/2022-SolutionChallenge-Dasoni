package com.gdsc.backend.oauth2;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gdsc.backend.oauth2.dto.OAuth2UserDetails;
import com.gdsc.backend.oauth2.jwt.Token;
import com.gdsc.backend.oauth2.jwt.TokenProvider;
import io.jsonwebtoken.lang.Assert;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@Component
@AllArgsConstructor
public class OAuth2SuccessHandler implements AuthenticationSuccessHandler {
    private TokenProvider tokenProvider;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        OAuth2UserDetails oAuth2UserDetails = (OAuth2UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Assert.notNull(oAuth2UserDetails);
        Token token = tokenProvider.createToken(oAuth2UserDetails.getId(), oAuth2UserDetails.getRoleType());
        writeTokenResponse(response, token);
    }

    private void writeTokenResponse(HttpServletResponse response, Token token) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        PrintWriter writer = response.getWriter();
        writer.println(objectMapper.writeValueAsString(token));
        writer.flush();
    }
}
