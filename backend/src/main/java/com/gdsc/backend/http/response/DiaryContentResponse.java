package com.gdsc.backend.http.response;

import com.gdsc.backend.entity.Diary;
import com.gdsc.backend.entity.enums.EmotionType;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;

import java.net.URI;
import java.time.LocalDate;
import java.util.UUID;

@Getter
public class DiaryContentResponse {
    @Schema(description = "다이어리 아이디")
    private UUID diaryId;

    @Schema(description = "제목", example = "Sample Diary Title")
    private String title;

    @Schema(description = "다이어리 내용", example = "Sample Diary Content")
    private String content;

    @Schema(description = "사용자가 등록한 감정", example = "Happy")
    private String emotion;

    @Schema(description = "사용자가 입력한 다이어리 내용을 분석한 감정 결과", example = "Happy")
    private String contentEmotion;

    @Schema(description = "다이어리 날짜")
    private LocalDate date;

    private DiaryContentResponse(Diary diary) {
        this.diaryId = diary.getId();
        this.title = diary.getTitle();
        this.content = diary.getContent();
        this.emotion = diary.getEmotion().getValue();
        this.contentEmotion = "Happy";
        this.date = diary.getDate();
    }

    public static DiaryContentResponse of(Diary diary) {
        return new DiaryContentResponse(diary);
    }

}
