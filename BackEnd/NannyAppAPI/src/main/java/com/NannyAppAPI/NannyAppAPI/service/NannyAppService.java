package com.NannyAppAPI.NannyAppAPI.service;

import java.util.List;

import com.NannyAppAPI.NannyAppAPI.domain.NannyApp;

public interface NannyAppService {
	
	List<NannyApp> findAll();
	
	List<NannyApp> findByDay(String day);
	
	List<NannyApp> findByDayAndTime(String day, String time);

	void saveOrUpdateTask(NannyApp nannyapp);
	
	void deleteTask(String id);
	

}