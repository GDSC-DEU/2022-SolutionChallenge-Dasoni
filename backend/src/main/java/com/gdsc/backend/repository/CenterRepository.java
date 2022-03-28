package com.gdsc.backend.repository;

import com.gdsc.backend.entity.Center;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CenterRepository extends JpaRepository<Center, UUID> {
}
