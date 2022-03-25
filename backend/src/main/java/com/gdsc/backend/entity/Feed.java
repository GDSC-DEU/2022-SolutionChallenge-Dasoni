package com.gdsc.backend.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.UUID;

@Schema(description = "피드")
@Getter
@Entity
@Table(name = "feed")
@NoArgsConstructor
public class Feed {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Schema(description = "피드 아이디", nullable = false)
    private UUID feed_id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "diary_id")
    private Diary diary;

    public Feed(Diary diary) {
        this.diary = diary;
    }
}
