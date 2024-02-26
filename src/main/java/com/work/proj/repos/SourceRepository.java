package com.work.proj.repos;

import com.work.proj.model.SourceInfo;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SourceRepository extends JpaRepository<SourceInfo, Long> {

    List<SourceInfo> findSourceInfoByMagnetronId(Long magnetronId);
    @Modifying
    @Query(value = "SELECT s FROM SourceInfo s " +
        "WHERE sourceId = :id " +
        "AND time = (" +
        "SELECT MAX(time) " +
        "FROM SourceInfo " +
        "WHERE sourceId = :id)")
    SourceInfo findSourceInfoBySourceId(@Param("id") Long id);
    List<SourceInfo> findAll();
}
