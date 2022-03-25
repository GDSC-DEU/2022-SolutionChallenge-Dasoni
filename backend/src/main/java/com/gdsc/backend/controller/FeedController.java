package com.gdsc.backend.controller;

import com.gdsc.backend.http.response.FeedListResponse;
import com.gdsc.backend.http.response.FeedResponse;
import com.gdsc.backend.service.FeedService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.SortDefault;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@Slf4j
@Tag(name = "feed", description = "피드 관련 API")
@RestController
@RequestMapping("/api/feeds")
public class FeedController {
    private FeedService feedService;

    @Autowired
    public FeedController(FeedService feedService) {
        this.feedService = feedService;
    }

    @Operation(summary = "전체 피드 조회", description = "전체 피드를 최신 날짜 순으로 조회합니다.", tags = "feed",
            responses = {
                    @ApiResponse(responseCode = "200", description = "피드 조회 성공",
                            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = FeedListResponse.class)))
            }
    )
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<FeedListResponse> getFeeds(
            @PageableDefault @SortDefault(sort = "createdDate", direction = Sort.Direction.DESC) Pageable pageable,
            @Parameter(name = "user-diaries", in = ParameterIn.QUERY, description = "사용자 자신의 다이어리 조회 여부") @RequestParam(value = "user-diaries", required = false, defaultValue = "false") Boolean mine
    ) {
        return ResponseEntity.ok(new FeedListResponse(pageable, feedService.findFeeds(pageable, mine)));
    }

    @Operation(summary = "피드 상세 조회", description = "피드의 상세 내용을 조회합니다.", tags = "feed",
            responses = {
                    @ApiResponse(responseCode = "200", description = "피드 상세 내용 조회 성공",
                            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = FeedResponse.class)))
            }
    )
    @GetMapping(value = "/{idx}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<FeedResponse> getFeedDetail(
            @Parameter(name = "idx", in = ParameterIn.PATH, description = "조회할 피드의 아이디") @PathVariable("idx") UUID id
    ) {
        return ResponseEntity.ok(feedService.findFeed(id));
    }
}
