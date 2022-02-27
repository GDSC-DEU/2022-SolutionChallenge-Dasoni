package com.gdsc.backend.repository;

import com.gdsc.backend.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Repository
public interface DiaryRepository extends JpaRepository<Diary, UUID> {
    Diary getById(@Param("id") UUID id);
    @Transactional void deleteById(UUID id);
}
