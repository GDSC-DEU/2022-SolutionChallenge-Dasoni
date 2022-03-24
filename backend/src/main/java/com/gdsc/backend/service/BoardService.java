package com.gdsc.backend.service;

import com.gdsc.backend.entity.Board;
import com.gdsc.backend.entity.Bookmark;
import com.gdsc.backend.entity.enums.BoardCategory;
import com.gdsc.backend.http.request.BookmarkRequest;
import com.gdsc.backend.http.response.BoardContentResponse;
import com.gdsc.backend.http.response.BookmarkContentResponse;
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
import java.util.stream.Collectors;

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
        List<Board> test = this.boardRepository.allProjects(pageable);
        return test.stream().map(this::makeResponse).collect(Collectors.toList());
    }

    public List<BoardContentResponse> getCategory(@PageableDefault Pageable pageable, BoardCategory boardCategory){
        List<Board> test = this.boardRepository.findByBoardCategory(pageable, boardCategory);
        return test.stream().map(this::makeResponse).collect(Collectors.toList());
    }

//    // TODO: 북마크 등록하는 기능 추가
//    public BookmarkContentResponse postBookmark(BookmarkRequest request){
//        UUID user_Id = UUID.fromString(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
//        Board board = request.findBoards(boardId);
//        Bookmark mine = bookmarkRepository.save(user_Id, board);
//        return BookmarkContentResponse.of(mine);
//    }
//
//    // TODO: 북마크 취소하는 기능 추가
////    public void removeBookmark(Long board_id){
////        UUID user_id = UUID.fromString(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
////        bookmarkRepository.delete(user_id, board_id);
////    }
//
//    // TODO: 북마크 조회하는 기능 추가
//    public List<BookmarkContentResponse> getBookmark(@PageableDefault Pageable pageable) {
//        UUID user_id = UUID.fromString(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
//        if(user_id == null){
//            return null;
//        }
//        List<Bookmark> project = this.bookmarkRepository.findByUsers(user_id);
//        return project.stream().map(this::madeResponse).collect(Collectors.toList());
//    }

    private BoardContentResponse makeResponse(Board board){
        return BoardContentResponse.of(board);
    }

    private BookmarkContentResponse madeResponse(Bookmark bookmark){
        return BookmarkContentResponse.of(bookmark);
    }
}
