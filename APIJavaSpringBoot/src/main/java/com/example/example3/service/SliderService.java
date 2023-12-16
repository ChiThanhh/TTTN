package com.example.example3.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.example3.entity.Slider;

public interface SliderService {
    Slider createSlider(Slider slider);

    Slider getSliderById(Long sliderId);

    Page<Slider> getAllSliders(Pageable pageable);

    Slider updateSlider(Slider slider);

    void deleteSlider(Long sliderId);
    
}
