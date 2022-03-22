package com.gdsc.backend.repository;

import com.gdsc.backend.entity.UserBoardPK;
import com.gdsc.backend.entity.UsersBoard;
import com.gdsc.backend.http.response.UsersBoardContentResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Repository
@Transactional(readOnly = true)
public interface BookmarkRepository extends JpaRepository<UsersBoard, UserBoardPK>{
   @Query("select b from UsersBoard b join fetch b.board")
   List<UsersBoardContentResponse> findByUsersAndBoard(UUID users_id);

   @Modifying
   @Query(value = "INSERT INTO UserBoard(user_id, board_id) VALUES(:user_id, :board_id)", nativeQuery = true)
   void insert(UUID user_id, Long board_id);

   @Modifying
   @Query(value = "DELETE FROM UsersBoard WHERE user_id =: user_id AND board_id =: board_id", nativeQuery = true)
   void delete(UUID user_id, Long board_id);
}