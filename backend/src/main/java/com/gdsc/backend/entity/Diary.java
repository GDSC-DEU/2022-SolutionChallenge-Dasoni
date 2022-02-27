package com.gdsc.backend.entity;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.gdsc.backend.entity.enums.EmotionType;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.UUID;

@Schema(description = "다이어리")
@Getter
@Entity
@Table(name = "diary")
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class Diary extends BaseTimeEntity {
    @Id
    @Schema(description = "다이어리 아이디", nullable = false)
    private UUID id;

    @Schema(description = "제목", nullable = false, example = "Sample Diary Title")
    @Column(nullable = false, length = 50)
    private String title;


    @Schema(description = "감정", nullable = false, allowableValues = {"HAPPY", "GOOD", "AVERAGE", "POOR", "BAD"}, example = "HAPPY")
    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false, length = 8)
    private EmotionType emotion;

    @Schema(description = "다이어리 내용", nullable = true, example = "Sample Diary Content")
    @Column(columnDefinition = "TEXT")
    private String content;

    @Builder
    public Diary(String title, EmotionType emotion, String content) {
        this.title = title;
        this.emotion = emotion;
        this.content = content;
    }
}
