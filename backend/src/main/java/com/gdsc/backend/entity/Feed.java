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
    @Column(name = "feed_id")
    @Schema(description = "피드 아이디", nullable = false)
    private UUID feedId;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "diary_id")
    private Diary diary;

    @OneToMany
    @OrderBy("createdDate")
    @JoinColumn(name = "feed_id")
    private List<Comment> comments = new ArrayList<>();

    @OneToMany
    @JoinColumn(name = "feed_id")
    private List<FeedLike> likes = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users owner;

    public Feed(Diary diary) {
        this.diary = diary;
        this.owner = diary.getUsers();
    }
}
