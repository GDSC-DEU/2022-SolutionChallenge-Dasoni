package com.gdsc.backend.repository;

import com.gdsc.backend.entity.Feed;
import com.gdsc.backend.entity.FeedLike;
import com.gdsc.backend.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
import java.util.Optional;


@Repository
public interface FeedLikeRepository extends JpaRepository<FeedLike, UUID> {
    Optional<FeedLike> findFeedLikeByUserAndFeed(Users user, Feed feed);
}
