package com.gdsc.backend.repository;

import com.gdsc.backend.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.UUID;


public interface DiaryRepository extends JpaRepository<Diary, Long> {
    Diary getById(@Param("id") UUID id);

}
