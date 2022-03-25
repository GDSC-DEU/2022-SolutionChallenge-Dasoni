package com.gdsc.backend.service;

import com.gdsc.backend.entity.Diary;
import com.gdsc.backend.entity.enums.EmotionType;
import com.gdsc.backend.http.response.CalendarResponse;
import com.gdsc.backend.http.response.ChartResponse;
import com.gdsc.backend.repository.DiaryRepository;
import com.gdsc.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class StatisticsService {
    UserRepository userRepository;
    DiaryRepository diaryRepository;

    @Autowired
    public StatisticsService(UserRepository userRepository, DiaryRepository diaryRepository) {
        this.userRepository = userRepository;
        this.diaryRepository = diaryRepository;
    }

    public List<CalendarResponse> findEmotionByMonth(Integer month) {
        UUID userId = UUID.fromString(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
        return diaryRepository.findEmotion(userRepository.getById(userId), month);
    }

    public List<ChartResponse> findChartData() {
        List<ChartResponse> result = new ArrayList<>();
        UUID userId = UUID.fromString(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
        LocalDate date = LocalDate.now().minusDays(1);
        for (int i = 1 ; i < 6 ; i++) {
            Float emotion_average = 0f;
            LocalDate endDate = date.minusDays(6);
            List<Diary> diaries = diaryRepository.findDiariesByUsersAndDateBetweenOrderByDateDesc(userRepository.getById(userId), date.minusDays(6), date);
            for(Diary diary : diaries) {
                while (!date.isEqual(diary.getDate())) {
                    emotion_average = EmotionType.NORMAL.getScore();
                    date = date.minusDays(1);
                    if( date.isEqual(endDate)) { break; }
                }
                emotion_average = (diary.getEmotion().getScore() + diary.getContentEmotion().getScore())/2;
                date = date.minusDays(1);
            }
            if(diaries.size() == 0) {
                date = date.minusDays(7);
            }
            result.add(new ChartResponse(date.plusDays(7), emotion_average/7));
        }
        return result;
    }
}
