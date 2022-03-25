package com.gdsc.backend.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;

import javax.persistence.*;
import java.util.UUID;

@Schema(description = "댓글")
@Getter
@Entity
@Table(name = "comment")
public class Comment extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Schema(description = "댓글 아이디", nullable = false)
    private UUID comment_id;

    @Schema(description = "댓글 내용", nullable = false, example = "That's really good idea.")
    @Column(nullable = false)
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private Users writer;
}