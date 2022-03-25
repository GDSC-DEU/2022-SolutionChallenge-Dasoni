package com.gdsc.backend.repository;

import com.gdsc.backend.entity.Diary;
import com.gdsc.backend.entity.Feed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface FeedRepository extends JpaRepository<Feed, UUID> {
    void deleteByDiary(Diary diary);
}
