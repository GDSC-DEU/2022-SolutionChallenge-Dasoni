package com.gdsc.backend.service;

import com.gdsc.backend.entity.Comment;
import com.gdsc.backend.entity.Feed;
import com.gdsc.backend.entity.FeedLike;
import com.gdsc.backend.http.response.FeedResponse;
import com.gdsc.backend.http.response.FeedSimpleResponse;
import com.gdsc.backend.repository.CommentRepository;
import com.gdsc.backend.repository.FeedLikeRepository;
import com.gdsc.backend.repository.FeedRepository;
import com.gdsc.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class FeedService {
    private final CommentRepository commentRepository;
    private final FeedRepository feedRepository;
    private final FeedLikeRepository feedLikeRepository;
    private final UserRepository userRepository;

    @Autowired
    public FeedService(CommentRepository commentRepository, FeedRepository feedRepository, FeedLikeRepository feedLikeRepository, UserRepository userRepository) {
        this.commentRepository = commentRepository;
        this.feedRepository = feedRepository;
        this.feedLikeRepository = feedLikeRepository;
        this.userRepository = userRepository;
    }

    public Page<FeedSimpleResponse> findFeeds(Pageable pageable, Boolean mine) {
        Page<Feed> feeds = null;
        if(mine) {
            UUID userId = UUID.fromString(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
            feeds = feedRepository.findFeedsByUser(userId, pageable);
        } else {
            feeds = feedRepository.findAll(pageable);
        }
        return feeds.map(FeedSimpleResponse::new);
    }

    public FeedResponse findFeed(UUID id) {
        UUID userId = UUID.fromString(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
        FeedResponse response = new FeedResponse(feedRepository.getById(id));
        if(feedLikeRepository.findFeedLikeByUserAndFeed(userRepository.getById(userId), feedRepository.getById(id)).isPresent()) {
            response.setLikeBoolean(true);
        }
        return response;
    }

    public void saveComment(UUID id, String comment) {
        Feed feed = feedRepository.getById(id);
        UUID userId = UUID.fromString(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
        feed.addComment(Comment.builder().content(comment).writer(userRepository.getById(userId)).build());
        feedRepository.save(feed);
    }

    public void deleteComment(UUID commentId) {
        UUID userId = UUID.fromString(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
        if(commentRepository.getById(commentId).getWriter().getUserId().compareTo(userId) == 0) {
            commentRepository.deleteById(commentId);
        }
    }

    public void saveFeedLike(UUID id) {
        UUID userId = UUID.fromString(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
        feedLikeRepository.save(FeedLike.builder().feed(feedRepository.getById(id)).user(userRepository.getById(userId)).build());
    }

    public void deleteFeedLike(UUID id) {
        UUID userId = UUID.fromString(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
        feedLikeRepository.delete(feedLikeRepository.findFeedLikeByUserAndFeed(userRepository.getById(userId), feedRepository.getById(id)).get());
    }

}
