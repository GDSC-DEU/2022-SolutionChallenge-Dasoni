package com.gdsc.backend.entity.enums;

public enum EmotionType {
    HAPPY("매우 행복"),
    GOOD("행복"),
    AVERAGE("평범"),
    POOR("나쁨"),
    BAD("매우 나쁨");

    private String value;

    EmotionType(String value) { this.value = value; }

    public String getValue() { return this.value; }
}
