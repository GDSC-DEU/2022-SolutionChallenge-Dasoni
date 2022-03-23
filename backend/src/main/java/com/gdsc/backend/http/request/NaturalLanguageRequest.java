package com.gdsc.backend.http.request;

import lombok.Builder;
import lombok.Getter;

@Getter
public class NaturalLanguageRequest {
    private final Document document;

    @Builder
    public NaturalLanguageRequest(String content) {
        this.document = Document.builder().content(content).build();
    }

    @Getter
    private static class Document {
        private final String type;
        private final String language;
        private final String content;

        @Builder
        public Document(String content) {
            this.type = "PLAIN_TEXT";
            this.language = "en";
            this.content = content;
        }
    }
}
