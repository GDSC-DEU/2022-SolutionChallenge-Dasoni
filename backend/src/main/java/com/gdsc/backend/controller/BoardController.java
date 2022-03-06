package com.gdsc.backend.controller;

import com.gdsc.backend.entity.Board;
import com.gdsc.backend.entity.enums.BoardCategory;
import com.gdsc.backend.http.response.BoardListResponse;
import com.gdsc.backend.service.BoardService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;

import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "support project", description = "지원사업 조회 API")
@RestController
@RequestMapping("/api/boards")
public class BoardController {
    private final BoardService boardService;

    @Autowired
    public BoardController(BoardService boardService){
        this.boardService = boardService;
    }

    @Operation(summary = "지원사업 조회", description = "카테고리에 해당하는 지원 사업을 최신 순으로 조회합니다", tags = "support project",
            responses = {
                @ApiResponse(responseCode = "200", description = "해당 지원사업 조회 성공",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = Board.class)))
            }
    )
    @GetMapping(value = "/{boardCategory}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BoardListResponse> getProjects(@Parameter(name = "boardCategory", in = ParameterIn.PATH, description = "조회할 지원사업의 카테고리") @PathVariable("boardCategory") BoardCategory boardCategory,
                                                                  @PageableDefault Pageable pageable){
        if(boardCategory.toString().equals("All")){
            Page<Board> projects = boardService.findProjects(pageable);
            return ResponseEntity.ok(new BoardListResponse(pageable, projects, BoardCategory.All));
        } else{
            Page<Board> projects = boardService.findCategory(boardCategory);
            return ResponseEntity.ok(new BoardListResponse(pageable, projects, boardCategory));
        }

    }
}
