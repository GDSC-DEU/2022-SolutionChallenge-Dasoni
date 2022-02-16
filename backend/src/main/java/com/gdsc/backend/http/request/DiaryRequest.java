package com.gdsc.backend.http.request;

import com.gdsc.backend.entity.Diary;
import com.gdsc.backend.entity.enums.EmotionType;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DiaryRequest {
    @Schema(description = "제목", nullable = false, example = "Sample Diary Title")
    private String title;

    @Schema(description = "감정", nullable = false, allowableValues = {"HAPPY", "GOOD", "AVERAGE", "POOR", "BAD"}, example = "HAPPY")
    private EmotionType emotion;

    @Schema(description = "다이어리 내용", nullable = true, example = "Sample Diary Content")
    private String content;

    public Diary toEntity(){
        Diary diary = Diary.builder()
                .title(title)
                .emotion(emotion)
                .content(content)
                .build();
        return diary;
    }
}
