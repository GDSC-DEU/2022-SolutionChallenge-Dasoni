package com.gdsc.backend.repository;

import com.gdsc.backend.entity.Board;
import com.gdsc.backend.entity.enums.BoardCategory;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {
    List<Board> findByBoardCategory(Pageable pageable,@Param("boardCategory") BoardCategory boardCategory);

    @Query(value = "select b from Board b")
    List<Board> allProjects(Pageable pageable);
}
