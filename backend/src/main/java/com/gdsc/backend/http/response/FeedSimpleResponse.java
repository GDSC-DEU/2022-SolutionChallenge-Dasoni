package com.gdsc.backend.http.response;

import com.gdsc.backend.entity.Diary;
import com.gdsc.backend.entity.Feed;
import com.gdsc.backend.entity.enums.EmotionType;
import com.gdsc.backend.entity.enums.StateType;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
public class FeedSimpleResponse {
    private UUID feedId;
    private EmotionType emotion;
    private String title;
    private String content;
    private Integer like;
    private Integer comment;
    private StateType stateType;
    private LocalDateTime createdTime;

    public FeedSimpleResponse(Feed feed) {
        Diary diary = feed.getDiary();
        this.feedId = feed.getFeedId();
        this.emotion = diary.getEmotion();
        this.title = diary.getTitle();
        this.content = diary.getContent();
        this.like = feed.getLikes().size();
        this.comment = feed.getComments().size();
        this.stateType = diary.getUsers().getStateType();
        this.createdTime = feed.getCreatedDate();
    }
}
