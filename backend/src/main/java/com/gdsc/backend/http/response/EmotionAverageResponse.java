package com.gdsc.backend.http.response;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class EmotionAverageResponse {
    String emotion;
    LocalDate startedDate;
    LocalDate endedDate;

    @Builder
    public EmotionAverageResponse(String emotion) {
        this.emotion = emotion;
        this.endedDate = LocalDate.now().minusDays(1);
        this.startedDate = this.endedDate.minusDays(7);
    }
}
