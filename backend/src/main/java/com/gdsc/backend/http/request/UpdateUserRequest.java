package com.gdsc.backend.http.request;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.gdsc.backend.entity.enums.StateType;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UpdateUserRequest {
    public UpdateUserRequest(StateType stateType) {
        this.stateType = stateType;
    }

    private StateType stateType;
}
