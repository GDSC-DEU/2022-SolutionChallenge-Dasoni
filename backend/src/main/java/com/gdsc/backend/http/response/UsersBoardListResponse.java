package com.gdsc.backend.http.response;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class UsersBoardListResponse {
    private final List<UsersBoardContentResponse> boards;

    @Builder
    public UsersBoardListResponse(List<UsersBoardContentResponse> boards){
        this.boards = boards;
    }
}
