package com.gdsc.backend.http.response;

import com.gdsc.backend.entity.UsersBoard;
import com.gdsc.backend.entity.enums.BoardCategory;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;

import java.time.LocalDate;
import java.util.UUID;

@Getter
public class UsersBoardContentResponse {
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

    private UsersBoardContentResponse(UsersBoard usersBoard){
        this.userId = usersBoard.getUsers().getUserId();
        this.boardId = usersBoard.getBoard().getBoardId();
        this.title = usersBoard.getBoard().getTitle();
        this.content = usersBoard.getBoard().getContent();
        this.organizer = usersBoard.getBoard().getOrganizer();
        this.startDate = usersBoard.getBoard().getStartDate();
        this.finishDate = usersBoard.getBoard().getFinishDate();
        this.boardCategory = usersBoard.getBoard().getBoardCategory();
        this.link = usersBoard.getBoard().getLink();
    }
}


