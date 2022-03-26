package com.gdsc.backend.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.UUID;

@Schema(description = "피드 좋아요")
@Getter
@Entity
@Table(name = "feed_like")
@NoArgsConstructor
public class FeedLike {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "feed_like_id")
    @Schema(description = "피드 좋아요 아이디", nullable = false)
    private UUID feedLikeId;

    @ManyToOne
    @JoinColumn(name = "feed_id")
    private Feed feed;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private Users user;

    @Builder
    public FeedLike(Feed feed, Users user) {
        this.feed = feed;
        this.user = user;
    }
}
