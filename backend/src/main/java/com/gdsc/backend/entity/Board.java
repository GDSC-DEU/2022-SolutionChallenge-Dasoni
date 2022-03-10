package com.gdsc.backend.entity;

import com.gdsc.backend.entity.enums.BoardCategory;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Entity
@Table(name = "boards")
@NoArgsConstructor
public class Board {
    @Id
    @Schema(description = "게시글 아이디", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Schema(description = "제목", nullable = false, example = "Supporting Project Title")
    @Column(nullable = false)
    private String title;

    @Schema(description = "주관사", nullable = false, example = "Organizer of Project")
    @Column(nullable = false)
    private String organizer;

    @Schema(description = "시작 날짜", nullable = false, example = "Application Start Date")
    @Column(nullable = false)
    private LocalDate startDate;

    @Schema(description = "종료 날짜", nullable = false, example = "Application Finish Date")
    @Column(nullable = false)
    private LocalDate finishDate;

    @Schema(description = "카테고리", nullable = false, allowableValues = {"All", "Financial", "Housing", "MedicalCare"}, example = "Categorizing Project")
    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private BoardCategory boardCategory;

    @Schema(description = "내용", nullable = false, example = "Supporting Project Content")
    @Column(columnDefinition = "TEXT")
    private String content;

    @Schema(description = "웹사이트 주소", nullable = false, example = "Website link")
    @Column(nullable = false)
    private String link;

    @Schema(description = "즐겨찾기", nullable = false, example = "bookmark of project")
    @Column(nullable = false)
    private boolean bookmark;

    @Builder
    public Board(String title, String organizer, LocalDate startDate, LocalDate finishDate, BoardCategory boardCategory, String content){
        this.title = title;
        this.organizer = organizer;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.boardCategory = boardCategory;
        this.content = content;
    }
}
