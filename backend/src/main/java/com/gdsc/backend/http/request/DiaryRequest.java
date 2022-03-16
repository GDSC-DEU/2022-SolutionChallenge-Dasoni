package com.gdsc.backend.http.request;

import com.gdsc.backend.entity.Diary;
import com.gdsc.backend.entity.enums.EmotionType;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Objects;

@Getter
@Setter
public class DiaryRequest {
    @Schema(description = "제목", nullable = false, example = "Sample Diary Title")
    private String title;

    @Schema(description = "감정", nullable = false, allowableValues = {"HAPPY", "GOOD", "AVERAGE", "POOR", "BAD"}, example = "HAPPY")
    private EmotionType emotion;

    @Schema(description = "다이어리 내용", nullable = true, example = "Sample Diary Content")
    private String content;

    @Schema(implementation = LocalDate.class, description = "다이어리 날짜", nullable = false, example = "2022-03-01")
    private LocalDate date;

    @Schema(description = "피드 공유 여부", nullable = true, example = "false")
    private Boolean feed;

    public void setFeed(Boolean feed) {
        this.feed = Objects.requireNonNullElse(feed, false);
    }

    public Diary toEntity(){
        return Diary.builder()
                .title(this.title)
                .emotion(this.emotion)
                .content(this.content)
                .date(this.date)
                .build();
    }
}
