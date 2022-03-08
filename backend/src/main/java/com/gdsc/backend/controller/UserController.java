package com.gdsc.backend.controller;

import com.gdsc.backend.entity.Users;
import com.gdsc.backend.http.request.UpdateUserRequest;
import com.gdsc.backend.http.response.GeneralResponse;
import com.gdsc.backend.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@Tag(name = "user", description = "사용자 정보 관련 API")
@RestController
@RequestMapping("/api/users")
public class UserController {
    UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @Operation(summary = "회원 가입된 유저 정보 수정", description = "유저 정보를 수정합니다.", tags = "user",
            responses = {
                    @ApiResponse(responseCode = "200", description = "회원 정보 수정 성공",
                            content = @Content(mediaType = "application/json", schema = @Schema(implementation = GeneralResponse.class)))
            })
    @PatchMapping
    public ResponseEntity<GeneralResponse> patchUser(@RequestBody UpdateUserRequest request) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UUID idx = UUID.fromString(authentication.getPrincipal().toString());
        Users data = Users.builder()
                .stateType(request.getStateType())
                .build();
        userService.updateUser(idx, data);
        return ResponseEntity.ok(GeneralResponse.of(HttpStatus.OK, "회원 정보 수정에 성공하였습니다."));
    }
}
