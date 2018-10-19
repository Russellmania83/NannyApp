package com.finalproject.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.finalproject.models.Sample;
import com.finalproject.repos.SampleRepository;

@CrossOrigin
@RestController
@RequestMapping("/sample")
public class SampleController {
	@Autowired
private SampleRepository sampleRepository;
	@GetMapping
	public @ResponseBody Iterable<Sample> getall(){
		return sampleRepository.findAll();
	}
}
