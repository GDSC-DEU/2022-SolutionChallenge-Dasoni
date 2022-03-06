package com.gdsc.backend.service;

import com.gdsc.backend.entity.Board;
import com.gdsc.backend.entity.enums.BoardCategory;
import com.gdsc.backend.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BoardService {
    private final BoardRepository boardRepository;

    @Autowired
    public BoardService(BoardRepository boardRepository){
        this.boardRepository = boardRepository;
    }

    public Page<Board> findProjects(Pageable pageable){
        return boardRepository.findAll(pageable);
    }

    public Page<Board> findCategory(BoardCategory boardCategory){
        return boardRepository.getByBoardCategory(boardCategory, PageRequest.of(1,20));
    }

}
