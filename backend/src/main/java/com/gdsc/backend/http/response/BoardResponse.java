package com.gdsc.backend.http.response;

import com.gdsc.backend.entity.Board;
import lombok.Getter;

@Getter
public class BoardResponse {
    private Board title;
    private Board content;
    private Board organizer;

    private BoardResponse(Board title, Board content, Board organizer){
        this.title = title;
        this.content = content;
        this.organizer = organizer;
    }

}
