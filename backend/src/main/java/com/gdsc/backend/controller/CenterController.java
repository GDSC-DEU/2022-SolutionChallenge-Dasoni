package com.gdsc.backend.controller;

import com.gdsc.backend.entity.Center;
import com.gdsc.backend.repository.CenterRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "center", description = "센터 정보 관련 API")
@RestController
@RequestMapping("/api/centers")
public class CenterController {
    private CenterRepository centerRepository;

    @Autowired
    public CenterController(CenterRepository centerRepository) {
        this.centerRepository = centerRepository;
    }

    @Operation(summary = "전체 센터 조회", description = "DB에 저장된 모든 센터 정보를 조회합니다.", tags = "center",
            responses = {
                    @ApiResponse(responseCode = "200", description = "전체 센터 정보 조회 성공",
                            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = Center.class)))
            }
    )
    @GetMapping
    public ResponseEntity<List<Center>> getCenter() {
        return ResponseEntity.ok(centerRepository.findAll());
    }
}
