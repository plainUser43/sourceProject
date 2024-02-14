package com.work.proj.controllers;

import com.work.proj.model.Source;
import com.work.proj.service.SourceService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.DriverManager;
import java.sql.PreparedStatement;

@RestController
@AllArgsConstructor
@RequestMapping("/sources")
public class SourceController {

    @Autowired
    private final SourceService sourceService;

    @GetMapping(path = "/")
    public void getAllSources() {

    }

    @GetMapping(path = "/{id}")
    public Source getSource(@PathVariable long id) {
        return sourceService.getSourceInfo(id);
    }
}
