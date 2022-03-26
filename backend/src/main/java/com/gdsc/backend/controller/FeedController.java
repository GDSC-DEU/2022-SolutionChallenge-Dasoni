package com.gdsc.backend.controller;

import com.gdsc.backend.http.request.CommentRequest;
import com.gdsc.backend.http.response.FeedListResponse;
import com.gdsc.backend.http.response.FeedResponse;
import com.gdsc.backend.http.response.GeneralResponse;
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
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@Slf4j
@Tag(name = "feed", description = "피드 관련 API")
@RestController
@RequestMapping("/api/feeds")
public class FeedController {
    private final FeedService feedService;

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

    @Operation(summary = "댓글 추가", description = "피드에 댓글을 추가합니다.", tags = "feed",
            responses = {
                    @ApiResponse(responseCode = "201", description = "댓글 추가 성공",
                            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = GeneralResponse.class)))
            }
    )
    @ResponseStatus(value = HttpStatus.CREATED)
    @PostMapping(value = "/{idx}/comments", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<GeneralResponse> postComment(
            @Parameter(name = "idx", in = ParameterIn.PATH, description = "댓글을 추가할 피드의 아이디") @PathVariable("idx") UUID id,
            @RequestBody CommentRequest request) {
        feedService.saveComment(id, request.getComment());
        return new ResponseEntity<>(GeneralResponse.of(HttpStatus.CREATED, "댓글 추가에 성공하였습니다."), HttpStatus.CREATED);
    }

    @Operation(summary = "댓글 삭제", description = "피드의 댓글을 삭제합니다.", tags = "feed",
            responses = {
                    @ApiResponse(responseCode = "204", description = "피드 댓글 삭제 성공",
                            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = GeneralResponse.class)))
            }
    )
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    @DeleteMapping(value = "/{idx}/comments/{comment-idx}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<GeneralResponse> deleteComment(
            @Parameter(name = "idx", in = ParameterIn.PATH, description = "댓글을 삭제할 피드의 아이디") @PathVariable("idx") UUID id,
            @Parameter(name = "idx", in = ParameterIn.PATH, description = "삭제할 댓글의 아이디") @PathVariable("comment-idx") UUID commentId
    ) {
        feedService.deleteComment(commentId);
        return new ResponseEntity<>(GeneralResponse.of(HttpStatus.NO_CONTENT, "댓글 삭제에 성공하였습니다."), HttpStatus.NO_CONTENT);
    }

    @Operation(summary = "좋아요 추가", description = "피드에 좋아요를 추가합니다.", tags = "feed",
            responses = {
                    @ApiResponse(responseCode = "201", description = "피드 좋아요 추가 성공",
                            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = GeneralResponse.class)))
            }
    )
    @ResponseStatus(value = HttpStatus.CREATED)
    @PostMapping(value = "/{idx}/likes", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<GeneralResponse> postLike(
            @Parameter(name = "idx", in = ParameterIn.PATH, description = "좋아요를 추가할 피드의 아이디") @PathVariable("idx") UUID id
    ) {
        feedService.saveFeedLike(id);
        return new ResponseEntity<>(GeneralResponse.of(HttpStatus.CREATED, "좋아요 추가에 성공하였습니다."), HttpStatus.CREATED);
    }

    @Operation(summary = "좋아요 삭제", description = "피드의 좋아요를 삭제합니다.", tags = "feed",
            responses = {
                    @ApiResponse(responseCode = "204", description = "피드 좋아요 삭제 성공",
                            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = GeneralResponse.class)))
            }
    )
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    @DeleteMapping(value = "/{idx}/likes", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<GeneralResponse> deleteLike(
            @Parameter(name = "idx", in = ParameterIn.PATH, description = "좋아요를 삭제할 피드의 아이디") @PathVariable("idx") UUID id
    ) {
        feedService.deleteFeedLike(id);
        return new ResponseEntity<>(GeneralResponse.of(HttpStatus.NO_CONTENT, "좋아요 삭제에 성공하였습니다."), HttpStatus.NO_CONTENT);
    }
}
