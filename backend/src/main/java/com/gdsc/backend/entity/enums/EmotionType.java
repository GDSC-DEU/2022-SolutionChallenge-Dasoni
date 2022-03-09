package com.gdsc.backend.entity.enums;

public enum EmotionType {
    VERY_HAPPY("Very Happy"),
    HAPPY("Happy"),
    NORMAL("Normal"),
    SAD("Sad"),
    VERY_SAD("Very Sad");

    private String value;

    EmotionType(String value) { this.value = value; }

    public String getValue() { return this.value; }
}