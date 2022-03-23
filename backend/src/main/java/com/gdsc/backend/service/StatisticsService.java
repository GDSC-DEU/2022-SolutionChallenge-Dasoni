package com.gdsc.backend.service;

import com.gdsc.backend.http.response.CalendarResponse;
import com.gdsc.backend.repository.DiaryRepository;
import com.gdsc.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

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
}
