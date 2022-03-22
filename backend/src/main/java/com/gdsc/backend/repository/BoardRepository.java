package com.gdsc.backend.repository;

import com.gdsc.backend.entity.Board;
import com.gdsc.backend.entity.enums.BoardCategory;

import com.gdsc.backend.http.response.BoardContentResponse;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {
    List<BoardContentResponse> findByBoardCategory(Pageable pageable,@Param("boardCategory") BoardCategory boardCategory);

    @Query(value = "select b from Board b")
    List<BoardContentResponse> allProjects(Pageable pageable);
}
