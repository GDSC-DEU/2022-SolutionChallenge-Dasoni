package com.gdsc.backend.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.UUID;

@Schema(description = "댓글")
@Getter
@Entity
@Table(name = "comment")
@NoArgsConstructor
public class Comment extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Schema(description = "댓글 아이디", nullable = false)
    @Column(name = "comment_id")
    private UUID commentId;

    @Schema(description = "댓글 내용", nullable = false, example = "That's really good idea.")
    @Column(nullable = false)
    private String content;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="user_id")
    private Users writer;

    @Builder
    public Comment(String content, Users writer) {
        this.content = content;
        this.writer = writer;
    }
}