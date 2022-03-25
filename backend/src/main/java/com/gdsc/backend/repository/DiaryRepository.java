package com.gdsc.backend.repository;

import com.gdsc.backend.entity.Diary;
import com.gdsc.backend.entity.Users;
import com.gdsc.backend.http.response.CalendarResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Optional;
import java.util.List;
import java.util.UUID;

@Repository
public interface DiaryRepository extends JpaRepository<Diary, UUID> {
    List<Diary> findDiariesByUsersAndDateBetweenOrderByDateDesc(Users userId, LocalDate start, LocalDate end);
    Optional<Diary> findDiaryByUsersAndId(Users user, UUID id);
    @Query("SELECT new com.gdsc.backend.http.response.CalendarResponse (diary.date, diary.emotion) FROM Diary diary WHERE diary.users = :user and MONTH(diary.date) = :month")
    List<CalendarResponse> findEmotion(@Param("user") Users user, @Param("month") Integer month);
    @Transactional void deleteByUsersAndId(Users user, UUID id);
}
