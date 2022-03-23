package com.gdsc.backend.http.response;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class BoardListResponse {
    private final List<BoardContentResponse> boards;

    @Builder
    public BoardListResponse(List<BoardContentResponse> boards){
        this.boards = boards;
    }
}
