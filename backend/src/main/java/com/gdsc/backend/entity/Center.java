package com.gdsc.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;

import javax.persistence.*;
import java.util.UUID;

@Schema(description = "센터 정보")
@Getter
@Entity
@Table(name = "center")
public class Center {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Schema(description = "센터 아이디", nullable = false)
    @JsonIgnore
    private UUID center_id;

    @Schema(description = "센터 이름", nullable = false, example = "Sample House")
    @Column
    private String name;

    @Schema(description = "센터 주소", nullable = false, example = "Gangseo-gu, Seoul")
    @Column
    private String address;

    @Schema(description = "센터 번호", nullable = false, example = "010-1234-5678")
    @Column
    private String number;

    @Schema(description = "센터 홈페이지 링크", nullable = false)
    @Column
    private String link;

    @Schema(description = "센터 위도", nullable = false, example = "37.553903")
    @Column
    private Double latitude;

    @Schema(description = "센터 경도", nullable = false, example = "126.8168862")
    @Column
    private Double longitude;
}
