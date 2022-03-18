package com.gdsc.backend.controller;

import com.gdsc.backend.entity.Diary;
import com.gdsc.backend.http.request.DiaryRequest;
import com.gdsc.backend.http.response.DiaryListResponse;
import com.gdsc.backend.http.response.DiaryContentResponse;
import com.gdsc.backend.http.response.DiaryResponse;
import com.gdsc.backend.http.response.EmotionAverageResponse;
import com.gdsc.backend.service.DiaryService;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.UUID;

@Slf4j
@Tag(name = "diary", description = "다이어리 관련 API")
@RestController
@RequestMapping("/api/diaries")
public class DiaryController {
    private final DiaryService diaryService;

    @Autowired
    public DiaryController(DiaryService diaryService) {this.diaryService = diaryService; }

    @Operation(summary = "전체 다이어리 조회", description = "사용자의 전체 다이어리를 최신 날짜 순으로 조회합니다.", tags = "diary",
        responses = {
            @ApiResponse(responseCode = "200", description = "전체 다이어리 조회 성공",
                content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = DiaryListResponse.class)))
        }
    )
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<DiaryListResponse> getDiaries(
            @Parameter(name = "year", in = ParameterIn.QUERY, description = "조회할 다이어리 년도") @RequestParam Integer year,
            @Parameter(name = "month", in = ParameterIn.QUERY, description = "조회할 다이어리 월") @RequestParam Integer month
    ) {
        if (!(month >= 1 && month <=12)) {
            log.trace("정확하지 않는 달을 입력하였습니다.");
            throw new RuntimeException();
        }

        EmotionAverageResponse emotionAverage = EmotionAverageResponse.builder().emotion("Very Sad").build();
        List<DiaryContentResponse> diaries = diaryService.findDiariesContent(year, month);

        DiaryListResponse response = DiaryListResponse.builder()
                .emotionAverage(emotionAverage)
                .diaries(diaries)
                .build();

        return  ResponseEntity.ok(response);
    }

    @Operation(summary = "다이어리 상세 조회", description = "다이어리 아이디를 통해 다이어리 내용을 상세 조회합니다.", tags = "diary",
            responses = {
            @ApiResponse(responseCode = "200", description = "다이어리 상세 조회 성공", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = DiaryContentResponse.class)))
        }
    )
    @GetMapping(value = "/{idx}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<DiaryContentResponse> getDiary(@Parameter(name = "idx", in = ParameterIn.PATH, description = "조회할 다이어리의 아이디") @PathVariable("idx") UUID id) {
        return ResponseEntity.ok(DiaryContentResponse.of(diaryService.findDiary(id)));
    }


    @Operation(summary = "다이어리 추가", description = "새로운 다이어리 데이터를 추가합니다.", tags = "diary",
            responses = {
                    @ApiResponse(responseCode = "201", description = "데이터 생성 성공",
                        content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                        schema = @Schema(implementation = DiaryResponse.class)))
            }
    )
    @ResponseStatus(value = HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<DiaryResponse> postDiary(@RequestBody DiaryRequest diaryRequest) {
        Diary result = diaryService.save(diaryRequest.toEntity());
        return new ResponseEntity<>(DiaryResponse.of(ServletUriComponentsBuilder.fromCurrentContextPath()
                                                                                .path(result.getId().toString())
                                                                                .build()
                                                                                .toUri(),
                                    result), HttpStatus.CREATED);
    }

    @Operation(summary = "다이어리 수정", description = "다이어리 내용을 수정합니다.", tags = "diary",
            responses = {
                    @ApiResponse(responseCode = "200", description = "다이어리 수정 성공",
                            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                                    schema = @Schema(implementation = DiaryResponse.class)))
            }
    )
    @PatchMapping(value = "/{idx}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<DiaryResponse> patchDiary(
            @Parameter(name = "idx", in = ParameterIn.PATH, description = "삭제할 다이어리의 아이디") @PathVariable("idx") UUID id,
            @RequestBody DiaryRequest diaryRequest
    ) {
        Diary result = diaryService.update(id, diaryRequest);
        return new ResponseEntity<>(DiaryResponse.of(ServletUriComponentsBuilder.fromCurrentContextPath()
                        .path(result.getId().toString())
                        .build()
                        .toUri(),
                result), HttpStatus.OK);
    }

    @Operation(summary = "다이어리 삭제", description = "다이어리 아이디를 통해 다이어리 데이터를 삭제합니다.", tags = "diary",
            responses = {
                    @ApiResponse(responseCode = "204", description = "데이터 삭제 성공")
            }
    )
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    @DeleteMapping(value = "/{idx}")
    public ResponseEntity<Void> deleteDiary(
            @Parameter(name = "idx", in = ParameterIn.PATH, description = "삭제할 다이어리의 아이디") @PathVariable("idx") UUID id
    ){
        diaryService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
