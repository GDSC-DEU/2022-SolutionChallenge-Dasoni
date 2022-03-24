package com.gdsc.backend.http.response;

import com.gdsc.backend.entity.Bookmark;
import com.gdsc.backend.entity.enums.BoardCategory;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;

import java.time.LocalDate;
import java.util.UUID;

@Getter
public class BookmarkContentResponse {
    @Schema(description = "사용자 아이디")
    private UUID userId;

    @Schema(description = "게시글 아이디")
    private Long boardId;

    @Schema(description = "게시글 제목")
    private String title;

    @Schema(description = "게시글 내용")
    private String content;

    @Schema(description = "주관사")
    private String organizer;

    @Schema(description = "시작 날짜")
    private LocalDate startDate;

    @Schema(description = "종료 날짜")
    private LocalDate finishDate;

    @Schema(description = "카테고리")
    private BoardCategory boardCategory;

    @Schema(description = "웹사이트 주소")
    private String link;

    private BookmarkContentResponse(Bookmark bookmark){
        this.userId = bookmark.getUsers().getUserId();
        this.boardId = bookmark.getBoard().getBoardId();
        this.title = bookmark.getBoard().getTitle();
        this.content = bookmark.getBoard().getContent();
        this.organizer = bookmark.getBoard().getOrganizer();
        this.startDate = bookmark.getBoard().getStartDate();
        this.finishDate = bookmark.getBoard().getFinishDate();
        this.boardCategory = bookmark.getBoard().getBoardCategory();
        this.link = bookmark.getBoard().getLink();
    }

    public static BookmarkContentResponse of(Bookmark bookmark) {
        return new BookmarkContentResponse(bookmark);
    }
}


