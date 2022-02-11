package com.gdsc.backend.controller;

import com.gdsc.backend.entity.Diary;
import com.gdsc.backend.http.response.DiaryListResponse;
import com.gdsc.backend.service.DiaryService;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Tag(name = "diary", description = "다이어리 관련 API")
@RestController
@RequestMapping("/api/diaries")
public class DiaryController {
    private final DiaryService diaryService;

    @Autowired
    public DiaryController(DiaryService diaryService) { this.diaryService = diaryService; }

    @Operation(summary = "전체 다이어리 조회", description = "사용자의 전체 다이어리를 최신 날짜 순으로 조회합니다.", tags = "diary",
        responses = {
            @ApiResponse(responseCode = "200", description = "전체 다이어리 조회 성공",
                content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = DiaryListResponse.class)))
        },
        parameters = {
            @Parameter(name = "page", description = "test", schema = @Schema(implementation = String.class, type = "query"))
        }
    )
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<DiaryListResponse> getDiaries(@PageableDefault Pageable pageable) {
        Page<Diary> diaries = diaryService.findDiaries(pageable);
        return ResponseEntity.ok(new DiaryListResponse(pageable, diaries));
    }
}
