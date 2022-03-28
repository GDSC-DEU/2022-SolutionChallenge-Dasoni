package com.gdsc.backend.service;

import com.gdsc.backend.entity.Diary;
import com.gdsc.backend.entity.Feed;
import com.gdsc.backend.entity.enums.EmotionType;
import com.gdsc.backend.http.request.DiaryRequest;
import com.gdsc.backend.http.response.ChartResponse;
import com.gdsc.backend.http.response.DiaryContentResponse;
import com.gdsc.backend.repository.DiaryRepository;
import com.gdsc.backend.repository.FeedRepository;
import com.gdsc.backend.repository.UserRepository;
import com.gdsc.backend.service.util.NaturalLanguage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Optional;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class DiaryService {
    private final UserRepository userRepository;
    private final DiaryRepository diaryRepository;
    private final FeedRepository feedRepository;
    private final NaturalLanguage naturalLanguage;

    @Autowired
    public DiaryService(NaturalLanguage naturalLanguage, UserRepository userRepository, DiaryRepository diaryRepository, FeedRepository feedRepository) {
        this.naturalLanguage = naturalLanguage;
        this.userRepository = userRepository;
        this.diaryRepository = diaryRepository;
        this.feedRepository = feedRepository;
    }

    public List<DiaryContentResponse> findDiariesContent(Integer year, Integer month) {
        UUID userId = UUID.fromString(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
        LocalDate date = LocalDate.of(year, month, 1);
        List<Diary> test = diaryRepository.findDiariesByUsersAndDateBetweenOrderByDateDesc(userRepository.getById(userId), date, date.withDayOfMonth(date.lengthOfMonth()));
        return test.stream().map(this::makeResponse).collect(Collectors.toList());
    }

    @Transactional
    public Diary findDiary(UUID id){
        return diaryRepository.getById(id);
    }

    public List<DiaryContentResponse> findWeekendDiaries() {
        UUID userId = UUID.fromString(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
        LocalDate date = LocalDate.now().minusDays(1);
        List<Diary> diaries = diaryRepository.findDiariesByUsersAndDateBetweenOrderByDateDesc(userRepository.getById(userId), date.minusDays(6), date);
        return diaries.stream().map(this::makeResponse).collect(Collectors.toList());
    }

    public EmotionType averageEmotion() {
        UUID userId = UUID.fromString(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
        LocalDate date = LocalDate.now().minusDays(1);
        Float emotion_average = 0f;
        LocalDate endDate = date.minusDays(6);
        List<Diary> diaries = diaryRepository.findDiariesByUsersAndDateBetweenOrderByDateDesc(userRepository.getById(userId), endDate, date);
        for(Diary diary : diaries) {
            while (!date.isEqual(diary.getDate())) {
                emotion_average = EmotionType.NORMAL.getScore();
                date = date.minusDays(1);
                if( date.isEqual(endDate)) { break; }
            }
            emotion_average = (diary.getEmotion().getScore() + diary.getContentEmotion().getScore())/2;
            date = date.minusDays(1);
        }
        return getEmotion(emotion_average);
    }

    public Diary save(Diary diary) {
        UUID userId = UUID.fromString(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
        diary.setUsers(userRepository.getById(userId));
        diary.setContentEmotion(scoreEmotion(diary.getContent()));
        return diaryRepository.save(diary);
    }

    public Diary update(UUID diaryId, DiaryRequest request) {
        UUID userId = UUID.fromString(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
        Optional<Diary> data = diaryRepository.findDiaryByUsersAndId(userRepository.getById(userId), diaryId);
        data.ifPresent(diary -> {
            if(request.getTitle() != null) {
                diary.setTitle(request.getTitle());
            }
            if(request.getContent() != null) {
                diary.setContent(request.getContent());
                diary.setContentEmotion(scoreEmotion(request.getContent()));
            }
            if(request.getEmotion() != null) {
                diary.setEmotion(request.getEmotion());
            }
            if(request.getDate() != null) {
                diary.setDate(request.getDate());
            }
            diaryRepository.save(diary);
        });
        return diaryRepository.getById(diaryId);
    }

    public void deleteById(UUID diaryId) {
        UUID userId = UUID.fromString(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
        diaryRepository.deleteByUsersAndId(userRepository.getById(userId), diaryId);
    }

    public void addFeed(Diary diary) {
        feedRepository.save(new Feed(diary));
    }

    public void deleteFeed(Diary diary) {
        feedRepository.deleteByDiary(diary);
    }

    private DiaryContentResponse makeResponse(Diary diary) {
        return DiaryContentResponse.of(diary);
    }

    private EmotionType scoreEmotion(String content) {
        Float score = naturalLanguage.getData(content);
        return getEmotion(score);
    }

    private EmotionType getEmotion(Float score) {
        if(score >= -1.0 && score <= -0.6) {
            return EmotionType.VERY_SAD;
        } else if (score <= -0.2) {
            return EmotionType.SAD;
        } else if (score <= 0.2) {
            return EmotionType.NORMAL;
        } else if (score <= 0.6) {
            return EmotionType.HAPPY;
        } else if (score <= 1.0){
            return EmotionType.VERY_HAPPY;
        }
        return EmotionType.NORMAL;
    }
}
