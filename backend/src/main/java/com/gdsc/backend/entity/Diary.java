package com.gdsc.backend.entity;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.gdsc.backend.entity.enums.EmotionType;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.UUID;

@Schema(description = "다이어리")
@Getter
@Entity
@Table(name = "diary", uniqueConstraints = {@UniqueConstraint(name = "diary_user_date_uq", columnNames = {"user_id", "date"})})
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class Diary extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Schema(description = "다이어리 아이디", nullable = false)
    private UUID id;

    @Schema(description = "제목", nullable = false, example = "Sample Diary Title")
    @Column(nullable = false, length = 50)
    private String title;

    @Schema(description = "다이어리 내용", nullable = true, example = "Sample Diary Content")
    @Column(columnDefinition = "TEXT")
    private String content;

    @Schema(description = "사용자가 등록한 감정", nullable = false, allowableValues = {"VERY_HAPPY", "HAPPY", "NORMAL", "SAD", "VERY_SAD"}, example = "HAPPY")
    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false, length = 10)
    private EmotionType emotion;

    @Schema(description = "사용자가 입력한 다이어리 내용을 분석한 감정 결과", nullable = false, allowableValues = {"VERY_HAPPY", "HAPPY", "NORMAL", "SAD", "VERY_SAD"}, example = "HAPPY")
    @Enumerated(value = EnumType.STRING)
    @Column(nullable = true, length = 8)
    private EmotionType contentEmotion;

    @Schema(description = "다이어리 날짜", nullable = false, example = "2022-03-01")
    @Column(nullable = false)
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users users;

    @OneToOne(mappedBy = "diary")
    private Feed feed;

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setEmotion(EmotionType emotion) {
        this.emotion = emotion;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public void setContentEmotion(EmotionType contentEmotion) {
        this.contentEmotion = contentEmotion;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    @Builder
    public Diary(String title, EmotionType emotion, String content, LocalDate date) {
        this.title = title;
        this.emotion = emotion;
        this.content = content;
        this.date = date;
    }
}
