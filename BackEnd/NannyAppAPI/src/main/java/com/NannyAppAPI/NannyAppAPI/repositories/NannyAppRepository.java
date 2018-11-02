package com.NannyAppAPI.NannyAppAPI.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.NannyAppAPI.NannyAppAPI.domain.NannyApp;

public interface NannyAppRepository extends MongoRepository<NannyApp, String>{
	
	List<NannyApp> findByDay(String day);
	
	List<NannyApp> findByDayAndTime(String day, String time);

}