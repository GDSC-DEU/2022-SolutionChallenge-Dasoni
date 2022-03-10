package com.gdsc.backend.service;

import com.gdsc.backend.entity.Board;
import com.gdsc.backend.entity.enums.BoardCategory;
import com.gdsc.backend.repository.BoardRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Log4j2
@Service
public class BoardService {
    private final BoardRepository boardRepository;

    @Autowired
    public BoardService(BoardRepository boardRepository){
        this.boardRepository = boardRepository;
    }

    public Page<Board> findProjects(Pageable pageable){
        return this.boardRepository.findAll(pageable);
    }

    public Page<Board> getCategory(BoardCategory boardCategory){
        return this.boardRepository.findByBoardCategory(boardCategory, PageRequest.of(0,10));
    }

    public Page<Board> getBookmark(Pageable pageable){
        return this.boardRepository.findByBookmark(pageable);
    }

}
