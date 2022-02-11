package com.gdsc.backend.http.response;

import com.gdsc.backend.entity.Diary;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import org.springframework.hateoas.Link;

import java.net.URI;

@Getter
public class DiaryResponse {
    private Diary content;
    @Schema(description = "다이어리 링크", nullable = true, example = "http://{url}/{diary_id}")
    private String link;

    private DiaryResponse(String link, Diary content) {
        this.link = link;
        this.content = content;
    }

    public static DiaryResponse of(URI uri, Diary diary) {
        return new DiaryResponse(uri.toString(), diary);
    }
}
