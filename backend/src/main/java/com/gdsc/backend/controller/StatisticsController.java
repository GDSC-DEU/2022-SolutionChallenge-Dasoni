package com.gdsc.backend.controller;

import com.gdsc.backend.http.response.CalendarResponse;
import com.gdsc.backend.http.response.ChartResponse;
import com.gdsc.backend.service.StatisticsService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@Tag(name = "statistics", description = "통계 관련 API")
@RestController
@RequestMapping("/api/statistics")
public class StatisticsController {
    private final StatisticsService statisticsService;

    @Autowired
    public StatisticsController(StatisticsService statisticsService) { this.statisticsService = statisticsService; }

    @Operation(summary = "월별 캘린더 내용 조회", description = "월별 캘린더에 표시된 감정 목록을 조회합니다.", tags = "statistics",
            responses = {
                    @ApiResponse(responseCode = "200", description = "캘린더 내용 조회 성공",
                            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = CalendarResponse.class)))
            }
    )
    @GetMapping(value = "/calendar", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<CalendarResponse>> getCalendar(
            @Parameter(name = "month", in = ParameterIn.QUERY, description = "조회할 다이어리 월") @RequestParam Integer month
    ) {
        if (!(month >= 1 && month <=12)) {
            log.trace("정확하지 않는 달을 입력하였습니다.");
            throw new RuntimeException();
        }
        return ResponseEntity.ok(statisticsService.findEmotionByMonth(month));
    }

    @Operation(summary = "월별 차트 내용 조회", description = "월별 차트에 표시될 데이터를 전달합니다..", tags = "statistics",
            responses = {
                    @ApiResponse(responseCode = "200", description = "차트 내용 조회 성공",
                            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ChartResponse.class)))
            }
    )
    @GetMapping(value = "/chart", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<ChartResponse>> getChart() {
        return ResponseEntity.ok(statisticsService.findChartData());
    }
}
