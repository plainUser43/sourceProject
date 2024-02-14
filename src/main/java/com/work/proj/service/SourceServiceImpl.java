package com.work.proj.service;

import com.work.proj.model.Source;
import com.work.proj.repos.SourceRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@AllArgsConstructor
public class SourceServiceImpl implements SourceService{

    @Autowired
    private final SourceRepository sourceRepository;
    @Override
    public Source getSourceInfo(Long id) {
        return sourceRepository.findSource();
    }
}
