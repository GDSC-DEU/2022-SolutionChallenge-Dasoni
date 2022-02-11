package com.gdsc.backend.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

/**
 * BaseTimeEntity class is automatically managing
 * createdDate and modifiedDate of all entities.
 * @author Jiyoon Bak
 */
@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseTimeEntity {
    @Schema(description = "생성 날짜")
    @CreatedDate
    @Column(name="created_date")
    private LocalDateTime createdDate;

    @Schema(description = "수정 날짜")
    @LastModifiedDate
    @Column(name="modified_date")
    private LocalDateTime modifiedDate;
}
