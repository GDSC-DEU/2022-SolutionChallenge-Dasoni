package com.gdsc.backend.repository;

import com.gdsc.backend.entity.Diary;
import com.gdsc.backend.entity.enums.EmotionType;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(SpringExtension.class)
@DataJpaTest
@ActiveProfiles("dev")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class DiaryEntityTest {
    private final static String DIARY_TEST_TITLE = "Spring Boot Test Diary";
    private final static EmotionType EMOTION = EmotionType.GOOD;
    private final static String DIARY_TEST_CONTENT = "Spring Boot Test Diary CONTENT";

    @Autowired
    private TestEntityManager testEntityManager;

    @Autowired
    private DiaryRepository diaryRepository;

    @Test
    public void DiaryStoreTest() {
        Diary diary = Diary.builder()
                .title(DIARY_TEST_TITLE)
                .emotion(EMOTION)
                .content(DIARY_TEST_CONTENT)
                .build();
        testEntityManager.persist(diary);

        assertEquals(diaryRepository.getById(diary.getId()),diary);
    }
}
