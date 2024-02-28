package com.work.proj.service;

import com.work.proj.model.SourceInfo;
import com.work.proj.repos.SourceRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
@NoArgsConstructor
public class SourceServiceImpl implements SourceService {

    @Autowired
    SourceRepository sourceRepository;
    @Override
    public SourceInfo getSourceInfo(Long id) {
        return sourceRepository.findSourceInfoBySourceId(id);
    }

    @Override
    public List<SourceInfo> getAll() {
        return sourceRepository.findAll();
    }
    @Override
    public List<SourceInfo> getAllInfo() {
        List<SourceInfo> result = new ArrayList<>();
        SourceInfo info;
        for (Long i = 1L; i < 26; i++) {
            info = getSourceInfo(i);
            if (info != null) {
                result.add(info);
            }
        }
        return result;
    }
}
