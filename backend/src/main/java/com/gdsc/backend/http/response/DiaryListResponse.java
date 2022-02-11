package com.gdsc.backend.http.response;

import com.gdsc.backend.controller.DiaryController;
import com.gdsc.backend.entity.Diary;
import lombok.Getter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.hateoas.PagedModel;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Getter
public class DiaryListResponse {
    private final PagedModel<Diary> resources;

    public DiaryListResponse(Pageable pageable, Page<Diary> page) {
        PagedModel.PageMetadata pageMetadata =
                new PagedModel.PageMetadata(pageable.getPageSize(), page.getNumber(), page.getTotalElements());
        this.resources = PagedModel.of(page.getContent(), pageMetadata);
        this.resources.add(linkTo(methodOn(DiaryController.class).getDiaries(pageable)).withSelfRel());
    }
}