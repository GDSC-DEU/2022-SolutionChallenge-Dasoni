package com.gdsc.backend.service;

import com.gdsc.backend.entity.Feed;
import com.gdsc.backend.http.response.FeedResponse;
import com.gdsc.backend.http.response.FeedSimpleResponse;
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
    private final FeedRepository feedRepository;
    private final FeedLikeRepository feedLikeRepository;
    private final UserRepository userRepository;

    @Autowired
    public FeedService(FeedRepository feedRepository, FeedLikeRepository feedLikeRepository, UserRepository userRepository) {
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

}
