package com.gdsc.backend.repository;

import com.gdsc.backend.entity.Users;
import com.gdsc.backend.entity.enums.SocialType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<Users, UUID> {
    Optional<Users> findByPrincipal(String principal);
    Optional<Users> findBySocialTypeAndPrincipal(SocialType socialType, String principal);
}
