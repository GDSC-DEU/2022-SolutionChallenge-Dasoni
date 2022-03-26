package com.gdsc.backend.http.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;

@Getter
public class CommentRequest {
    @Schema(description = "댓글 내용", nullable = true, example = "Sample Feed Comment")
    private String comment;
}
