package com.gdsc.backend.http.response;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class UsersBoardListResponse {
    private final List<BookmarkContentResponse> boards;

    @Builder
    public UsersBoardListResponse(List<BookmarkContentResponse> boards){
        this.boards = boards;
    }
}
