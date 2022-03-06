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
@Table(name = "supportProject")
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

    @Schema(description = "카테고리", nullable = false, allowableValues = {"All", "Financial", "Housing", "MedicalCare"}, example = "Categorizing Project")
    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private BoardCategory boardCategory;

    @Schema(description = "작성날짜", nullable = false, example = "written date")
    @Column(nullable = false)
    private LocalDate date;

    @Schema(description = "내용", nullable = false, example = "Supporting Project Content")
    @Column(columnDefinition = "TEXT")
    private String content;

    @Schema(description = "즐겨찾기", nullable = false, example = "bookmark of project")
    @Column(nullable = false)
    private boolean bookmark;

    @Builder
    public Board(String title, String organizer, LocalDate date, BoardCategory boardCategory, String content){
        this.title = title;
        this.organizer = organizer;
        this.date = date;
        this.boardCategory = boardCategory;
        this.content = content;
    }
}
