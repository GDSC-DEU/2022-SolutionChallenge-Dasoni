package com.gdsc.backend.http.response;

import com.gdsc.backend.controller.FeedController;
import lombok.Getter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.hateoas.PagedModel;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Getter
public class FeedListResponse {
    private final PagedModel<FeedSimpleResponse> resources;

    public FeedListResponse(Pageable pageable, Page<FeedSimpleResponse> page) {
        PagedModel.PageMetadata pageMetadata =
                new PagedModel.PageMetadata(pageable.getPageSize(), page.getNumber(), page.getTotalElements());
        this.resources = PagedModel.of(page.getContent(), pageMetadata);
        this.resources.add(linkTo(methodOn(FeedController.class).getFeeds(pageable, false)).withSelfRel());
    }
}
