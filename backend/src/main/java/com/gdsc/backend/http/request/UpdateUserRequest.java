package com.gdsc.backend.http.request;

import com.gdsc.backend.entity.enums.StateType;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UpdateUserRequest {
    private StateType stateType;
}
