package com.gdsc.backend.repository;

import com.gdsc.backend.entity.Diary;
import com.gdsc.backend.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Repository
public interface DiaryRepository extends JpaRepository<Diary, UUID> {
    List<Diary> findDiariesByUsersAndDateBetween(Users userId, LocalDate start, LocalDate end);
    @Transactional void deleteByUsersAndId(Users user, UUID id);
}
