package com.gdsc.backend.entity;

import lombok.*;

import javax.annotation.Priority;
import javax.persistence.*;

@Data
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Entity
@Table(name = "bookmarked")
@IdClass(UserBoardPK.class)
public class UsersBoard {

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "users_id")
    private Users users;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_id")
    private Board board;

}
