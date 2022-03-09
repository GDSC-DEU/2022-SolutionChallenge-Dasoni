package com.gdsc.backend.http.response;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class EmotionAverageResponse {
    @Schema(description = "사용자의 일주일 평균 감정", example = "Happy")
    String emotion;
    @Schema(description = "일주일의 시작일")
    LocalDate startedDate;
    @Schema(description = "일주일의 마지막일")
    LocalDate endedDate;

    @Builder
    public EmotionAverageResponse(String emotion) {
        this.emotion = emotion;
        this.endedDate = LocalDate.now().minusDays(1);
        this.startedDate = this.endedDate.minusDays(7);
    }
}
