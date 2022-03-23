package com.gdsc.backend.service.util;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gdsc.backend.http.request.NaturalLanguageRequest;
import com.gdsc.backend.http.response.DocumentSentiment;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Collections;
import java.util.Map;
import java.util.Objects;

@Slf4j
@Component
public class NaturalLanguage {
    @Value("${google.natural_language}")
    private String key;
    private final RestTemplate restTemplate;

    public NaturalLanguage() {
        this.restTemplate = new RestTemplate();
    }

    public Float getData(String text) {
        HttpHeaders headers = new HttpHeaders();
        setHeaders(headers);

        NaturalLanguageRequest request_body = new NaturalLanguageRequest(text);

        ObjectMapper mapper = new ObjectMapper();
        DocumentSentiment documentSentiment = mapper.convertValue(sendRequest(new HttpEntity<>(request_body, headers)), new TypeReference<>() {});
        return documentSentiment.getScore();
    }

    private void setHeaders(HttpHeaders headers) {
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
    }

    private Object sendRequest(HttpEntity<?> request) {
        UriComponents uriComponents = UriComponentsBuilder.newInstance()
                .scheme("https")
                .host("language.googleapis.com")
                .path("/v1/documents:analyzeSentiment")
                .queryParam("key", this.key)
                .build(true);

        try {
            ResponseEntity<Map<String, Object>> response = restTemplate.exchange(
                    uriComponents.toUri(),
                    HttpMethod.POST,
                    request,
                    new ParameterizedTypeReference<>(){}
            );
            Map<String, Object> body = response.getBody();
            return Objects.requireNonNull(body).get("documentSentiment"); // documentSentiment.score

        } catch (HttpClientErrorException e) {
            log.debug(e.getMessage());
        }
        return null;
    }

}
