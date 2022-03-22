package com.gdsc.backend.http.response;

import com.gdsc.backend.entity.Board;
import com.gdsc.backend.entity.enums.BoardCategory;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class BoardContentResponse {
    @Schema(description = "게시글 아이디")
    private Long boardId;

    @Schema(description = "제목")
    private String title;

    @Schema(description = "내용")
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

    private BoardContentResponse(Board board){
       boardId = board.getBoardId();
       title = board.getTitle();
       content = board.getContent();
       organizer = board.getOrganizer();
       startDate = board.getStartDate();
       finishDate = board.getFinishDate();
       boardCategory = board.getBoardCategory();
       link = board.getLink();
    }
}
