package com.gdsc.backend.http.response;

import com.gdsc.backend.entity.Comment;
import com.gdsc.backend.entity.Feed;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;


@Getter
public class FeedResponse {
    private FeedSimpleResponse content;
    private Boolean likeBoolean;
    private List<CommentResponse> comment;

    public void setLikeBoolean(Boolean likeBoolean) {
        this.likeBoolean = likeBoolean;
    }

    public FeedResponse(Feed feed) {
        this.content = new FeedSimpleResponse(feed);
        this.likeBoolean = false;
        this.comment = new ArrayList<>();
        HashMap<String, String> names = new HashMap<>();
        UUID writerId = feed.getOwner().getUserId();
        int count = 1;
        String name = "Anonymous";
        for(Comment comment : feed.getComments()) {
            if (comment.getWriter().getUserId() == writerId) {
                if(!names.containsKey(writerId.toString())) {
                    names.put(writerId.toString(), name+"(Writer)");
                }
            } else if (!names.containsKey(comment.getWriter().getUserId().toString())) {
                names.put(comment.getWriter().getUserId().toString(), name + count);
                count++;
            }
            this.comment.add(new CommentResponse(comment, names.get(comment.getWriter().getUserId().toString())));
        }
    }

    @Getter
    private class CommentResponse {
        private String name;
        private String content;
        private LocalDateTime createdDate;

        public CommentResponse(Comment comment, String name) {
            this.name = name;
            this.content = comment.getContent();
            this.createdDate = comment.getCreatedDate();
        }
    }
}
