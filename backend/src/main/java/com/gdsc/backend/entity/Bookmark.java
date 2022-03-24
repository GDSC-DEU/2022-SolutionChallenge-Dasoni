package com.gdsc.backend.entity;

import lombok.*;

import javax.persistence.*;

@Data
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Entity
@Table(name = "bookmark")
@IdClass(BookmarkPK.class)
public class Bookmark {

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private Users users;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_id")
    private Board board;

}
