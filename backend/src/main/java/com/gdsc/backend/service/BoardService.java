package com.gdsc.backend.service;

import com.gdsc.backend.entity.enums.BoardCategory;
import com.gdsc.backend.http.response.BoardContentResponse;
import com.gdsc.backend.http.response.UsersBoardContentResponse;
import com.gdsc.backend.repository.BoardRepository;
import com.gdsc.backend.repository.BookmarkRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Log4j2
@Service
public class BoardService {
    private final BoardRepository boardRepository;
    private final BookmarkRepository bookmarkRepository;

    @Autowired
    public BoardService(BoardRepository boardRepository, BookmarkRepository bookmarkRepository){
        this.boardRepository = boardRepository;
        this.bookmarkRepository = bookmarkRepository;
    }

    public List<BoardContentResponse> findProjects(@PageableDefault Pageable pageable){
        return this.boardRepository.allProjects(pageable);
    }

    public List<BoardContentResponse> getCategory(@PageableDefault Pageable pageable, BoardCategory boardCategory){
        return this.boardRepository.findByBoardCategory(pageable, boardCategory);
    }

    // TODO: 북마크 등록하는 기능 추가
    public void postBookmark(Long board_id){
        UUID user_id = UUID.fromString(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
        bookmarkRepository.insert(user_id, board_id);
    }

    // TODO: 북마크 취소하는 기능 추가
    public void removeBookmark(Long board_id){
        UUID user_id = UUID.fromString(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
        bookmarkRepository.delete(user_id, board_id);
    }

    // TODO: 북마크 조회하는 기능 추가
    public List<UsersBoardContentResponse> getBookmark(@PageableDefault Pageable pageable) {
        UUID user_id = UUID.fromString(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
        if(user_id == null){
            return null;
        }
        List<UsersBoardContentResponse> project = this.bookmarkRepository.findByUsersAndBoard(user_id);
        return project;
    }



}
