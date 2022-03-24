package com.gdsc.backend.http.request;

import com.gdsc.backend.entity.Board;
import com.gdsc.backend.repository.BoardRepository;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class BookmarkRequest {
    private BoardRepository boardRepository;
    private Long boardId;

    public Board findBoards(Long boardId) {
        Board board = boardRepository.getById(boardId);
        return board;
    }
}
