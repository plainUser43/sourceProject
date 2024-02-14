package com.work.proj.repos;

import com.work.proj.model.Source;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SourceRepository extends JpaRepository<Source, Long> {

    @Query("SELECT (id) FROM Source WHERE time=(SELECT MAX(time) from Source)")
    Source findSource();

    List<Source> findAll();
}
