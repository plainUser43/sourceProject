package com.work.proj.service;

import com.work.proj.model.SourceInfo;

import java.util.List;

public interface SourceService {
    SourceInfo getSourceInfo(Long id);
    List<SourceInfo> getAll();

    List<SourceInfo> getAllInfo();
}
