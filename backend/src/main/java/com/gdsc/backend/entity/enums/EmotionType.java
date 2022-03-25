package com.gdsc.backend.entity.enums;

public enum EmotionType {
    VERY_HAPPY("Very Happy", 1.0f),
    HAPPY("Happy", 0.5f),
    NORMAL("Normal", 0.0f),
    SAD("Sad", -0.5f),
    VERY_SAD("Very Sad", -1.0f);

    private String value;
    private Float score;

    EmotionType(String value, Float score) {
        this.value = value;
        this.score = score;
    }

    public String getValue() { return this.value; }

    public Float getScore() { return this.score; }
}