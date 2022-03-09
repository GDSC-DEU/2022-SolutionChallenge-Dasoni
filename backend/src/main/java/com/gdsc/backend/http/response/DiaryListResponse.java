package com.gdsc.backend.http.response;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class DiaryListResponse {
    private final EmotionAverageResponse emotionAverage;
    private final List<DiaryContentResponse> diaries;

    @Builder
    public DiaryListResponse(EmotionAverageResponse emotionAverage, List<DiaryContentResponse> diaries) {
        this.emotionAverage = emotionAverage;
        this.diaries = diaries;
    }
}