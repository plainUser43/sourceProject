package com.work.proj.controllers;

import com.work.proj.model.SourceInfo;
import com.work.proj.service.SourceService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/sources")
public class SourceController {

    private SourceService sourceService;

    @GetMapping(path = "")
    public List<SourceInfo> getAllSources() {
        return sourceService.getAllInfo();
    }
    @GetMapping(path = "/{id}")
    public SourceInfo getSource(@PathVariable long id) {
        return sourceService.getSourceInfo(id);
    }
}
