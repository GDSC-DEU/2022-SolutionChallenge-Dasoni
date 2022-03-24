package com.gdsc.backend.repository;

import com.gdsc.backend.entity.Board;
import com.gdsc.backend.entity.BookmarkPK;
import com.gdsc.backend.entity.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Repository
@Transactional(readOnly = true)
public interface BookmarkRepository extends JpaRepository<Bookmark, BookmarkPK>{
   List<Bookmark> findByUsers(UUID userId);

   @Modifying
   @Query(value = "INSERT VALUES INTO Bookmark where userID =: user_id", nativeQuery = true)
   Bookmark save(UUID userId, Board board);

//   @Modifying
//   @Query(value = "DELETE FROM UsersBoard WHERE user_id =: user_id AND board_id =: board_id", nativeQuery = true)
//   void delete(UUID user_id, Long board_id);
}