package com.gdsc.backend.repository;

import com.gdsc.backend.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CommentRepository extends JpaRepository<Comment, UUID> {
    @Query(value = "DELETE FROM comment c WHERE c.user_id = ?1 AND c.feed_id = ?2" , nativeQuery = true)
    void deleteComment(@Param("user_id") UUID userId, @Param("feed_id") UUID feedId);
}
