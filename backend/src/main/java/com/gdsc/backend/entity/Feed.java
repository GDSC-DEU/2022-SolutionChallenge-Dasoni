package com.gdsc.backend.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.UUID;
import java.util.List;

@Schema(description = "피드")
@Getter
@Entity
@Table(name = "feed")
@NoArgsConstructor
public class Feed extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Schema(description = "피드 아이디", nullable = false)
    private UUID feed_id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "diary_id")
    private Diary diary;

    @OneToMany
    @JoinColumn(name = "feed_id")
    private List<Comment> comments = new ArrayList<>();

    @OneToMany
    @JoinColumn(name = "feed_id")
    private List<FeedLike> likes = new ArrayList<>();

    public Feed(Diary diary) {
        this.diary = diary;
    }
}
