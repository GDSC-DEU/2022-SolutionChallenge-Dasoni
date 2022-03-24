package com.gdsc.backend.controller;

import com.gdsc.backend.entity.enums.BoardCategory;
import com.gdsc.backend.http.response.BoardContentResponse;
import com.gdsc.backend.http.response.BoardListResponse;
//import com.gdsc.backend.http.response.UsersBoardListResponse;
//import com.gdsc.backend.http.response.UsersBoardContentResponse;
import com.gdsc.backend.service.BoardService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "support project", description = "지원사업 관련 API")
@RestController
@RequestMapping("/api/boards")
public class BoardController {
    private final BoardService boardService;

    @Autowired
    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @Operation(summary = "지원사업 조회", description = "카테고리에 해당하는 지원 사업을 최신 순으로 조회합니다", tags = "support project",
            responses = {
                    @ApiResponse(responseCode = "200", description = "해당 지원사업 조회 성공",
                            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = BoardListResponse.class)))
            }
    )

    @GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BoardListResponse> getProjects(
            @PageableDefault Pageable pageable,
            @Parameter(name = "boardCategory", in = ParameterIn.PATH, description = "조회할 지원사업의 카테고리") @RequestParam(required = false) BoardCategory boardCategory) {
        if (boardCategory == null) {
            List<BoardContentResponse> projects = this.boardService.findProjects(pageable);
            BoardListResponse boardlist = BoardListResponse.builder()
                    .boards(projects)
                    .build();
            return ResponseEntity.ok(boardlist);
        }

        List<BoardContentResponse> categorized = this.boardService.getCategory(pageable, boardCategory);
        BoardListResponse cboardlist = BoardListResponse.builder()
                .boards(categorized)
                .build();
        return ResponseEntity.ok(cboardlist);

    }

//    @Operation(summary = "북마크된 지원사업 조회", description = "즐겨찾기한 지원 사업을 최신 순으로 조회합니다", tags = "support project",
//            responses = {
//                    @ApiResponse(responseCode = "200", description = "북마크 목록 조회 성공",
//                            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UsersBoardListResponse.class)))
//            }
//    )
//    @GetMapping(value = "/bookmarked-boards", produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<UsersBoardListResponse> getBookmark(@PageableDefault Pageable pageable) {
//
//        List<UsersBoardContentResponse> boards = this.boardService.getBookmark(pageable);
//        UsersBoardListResponse bookmarklist = UsersBoardListResponse.builder()
//                .boards(boards)
//                .build();
//        return ResponseEntity.status(HttpStatus.OK).body(bookmarklist);
//
//    }
//
//    @Operation(summary = "지원사업에 북마크 추가", description = "사용자가 지원사업을 즐겨찾기로 등록합니다", tags = "support project",
//            responses = {
//                    @ApiResponse(responseCode = "201", description = "북마크에 추가 성공",
//                            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UsersBoardContentResponse.class)))
//            })
//
//    @ResponseStatus(value = HttpStatus.CREATED)
//    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<UsersBoardContentResponse> addBookmark(@RequestParam("boardId") Long boardId) {
//        UsersBoardContentResponse result = this.boardService.postBookmark(boardId);
//        return ResponseEntity.status(HttpStatus.OK).body(result);
//    }
}


