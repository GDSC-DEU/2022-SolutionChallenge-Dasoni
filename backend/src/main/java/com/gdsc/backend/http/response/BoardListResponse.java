package com.gdsc.backend.http.response;

import com.gdsc.backend.controller.BoardController;
import com.gdsc.backend.entity.Board;
import com.gdsc.backend.entity.enums.BoardCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.hateoas.PagedModel;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

public class BoardListResponse {
    private final PagedModel<Board> resources;

    public BoardListResponse(Pageable pageable, Page<Board> page, BoardCategory boardCategory){
        PagedModel.PageMetadata pageMetadata =
                new PagedModel.PageMetadata(pageable.getPageSize(), page.getNumber(), page.getTotalElements());
        this.resources = PagedModel.of(page.getContent(), pageMetadata);
        this.resources.add(linkTo(methodOn(BoardController.class).getProjects(boardCategory, pageable)).withSelfRel());

    }
}
