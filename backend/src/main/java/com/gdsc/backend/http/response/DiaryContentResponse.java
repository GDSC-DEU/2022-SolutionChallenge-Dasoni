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
    private UUID diaryId;
    private String title;
    private String content;
    private String emotion;
    private String contentEmotion;
    private LocalDate date;

    private DiaryContentResponse(Diary diary) {
        this.diaryId = diary.getId();
        this.title = diary.getTitle();
        this.content = diary.getContent();
        this.emotion = diary.getEmotion().getValue();
        this.contentEmotion = diary.getContentEmotion().getValue();
        this.date = diary.getDate();
    }

    public static DiaryContentResponse of(Diary diary) {
        return new DiaryContentResponse(diary);
    }

}
