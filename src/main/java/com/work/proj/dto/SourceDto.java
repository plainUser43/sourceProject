package com.work.proj.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SourceDto {
    private Long numberOfMagnetron;
    private double time;
    private List <Double> params;
}
