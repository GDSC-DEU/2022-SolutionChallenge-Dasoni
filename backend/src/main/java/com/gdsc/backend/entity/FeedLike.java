package com.gdsc.backend.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;

import javax.persistence.*;
import java.util.UUID;

@Schema(description = "피드 좋아요")
@Getter
@Entity
@Table(name = "feed_like")
public class FeedLike {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "feed_like_id")
    @Schema(description = "피드 좋아요 아이디", nullable = false)
    private UUID feedLikeId;

    @ManyToOne
    @JoinColumn(name = "feed_id", insertable = false, updatable = false)
    private Feed feed;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private Users user;
}
