package com.gdsc.backend.repository;

import com.gdsc.backend.entity.Diary;
import com.gdsc.backend.entity.Feed;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface FeedRepository extends JpaRepository<Feed, UUID> {
    @Query(value = "SELECT * FROM feed WHERE user_id=?1",
           countQuery = "SELECT count(*) FROM feed WHERE user_id=?1",
           nativeQuery = true)
    Page<Feed> findFeedsByUser(@Param("user_id") UUID userId, Pageable pageable);
    void deleteByDiary(Diary diary);
}
