package com.gdsc.backend.controller;

import com.gdsc.backend.entity.Diary;
import com.gdsc.backend.http.request.DiaryRequest;
import com.gdsc.backend.http.response.DiaryListResponse;
import com.gdsc.backend.http.response.DiaryResponse;
import com.gdsc.backend.service.DiaryService;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.UUID;


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
        }
    )
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<DiaryListResponse> getDiaries(@PageableDefault Pageable pageable) {
        Page<Diary> diaries = diaryService.findDiaries(pageable);
        return ResponseEntity.ok(new DiaryListResponse(pageable, diaries));
    }

    @Operation(summary = "다이어리 상세 조회", description = "다이어리 아이디를 통해 다이어리 내용을 상세 조회합니다.", tags = "diary",
            responses = {
            @ApiResponse(responseCode = "200", description = "다이어리 상세 조회 성공",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE))
        }
    )
    @GetMapping(value = "/{idx}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getDiary(
            @Parameter(name = "idx", in = ParameterIn.PATH, description = "조회할 다이어리의 아이디") @PathVariable("idx") UUID id) {
        if(diaryService.findDiary(id) == null){
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<>(diaryService.findDiary(id), HttpStatus.OK);
    }


    @Operation(summary = "다이어리 추가", description = "새로운 다이어리 데이터를 추가합니다.", tags = "diary",
            responses = {
                    @ApiResponse(responseCode = "201", description = "데이터 생성 성공",
                        content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE))
            }
    )
    @ResponseStatus(value = HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<DiaryResponse> postDiary(@RequestBody DiaryRequest diaryRequest) {
        Diary result = diaryService.save(diaryRequest);
        return new ResponseEntity<>(DiaryResponse.of(ServletUriComponentsBuilder.fromCurrentContextPath()
                                                                                .path(result.getId().toString())
                                                                                .build()
                                                                                .toUri(),
                                    result), HttpStatus.CREATED);
    }

    @Operation(summary = "다이어리 삭제", description = "다이어리 아이디를 통해 다이어리 데이터를 삭제합니다.", tags = "diary",
            responses = {
                    @ApiResponse(responseCode = "204", description = "데이터 삭제 성공")
            }
    )
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    @DeleteMapping(value = "/{idx}")
    public ResponseEntity<Void> deleteDiary(
            @Parameter(name = "idx", in = ParameterIn.PATH, description = "삭제할 다이어리의 아이디") @PathVariable("idx") UUID id){
        diaryService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
