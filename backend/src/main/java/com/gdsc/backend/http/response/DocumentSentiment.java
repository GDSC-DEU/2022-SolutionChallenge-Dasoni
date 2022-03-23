package com.gdsc.backend.http.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DocumentSentiment {
    Float magnitude;
    Float score;
}
