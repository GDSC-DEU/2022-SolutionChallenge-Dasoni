package com.gdsc.backend.entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class UserBoardPK implements Serializable {
    private Users users;
    private Board board;
}
