package com.NannyAppAPI.NannyAppAPI.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.NannyAppAPI.NannyAppAPI.domain.NannyApp;
import com.NannyAppAPI.NannyAppAPI.repositories.NannyAppRepository;

@Service
public class NannyAppServiceImpl implements NannyAppService {

	@Autowired
	NannyAppRepository nannyAppRepository;

	@Override
	public List<NannyApp> findAll() {
		return nannyAppRepository.findAll();
	}

	
	@Override
	public List<NannyApp> findByDayAndTime(String day, String time) {
		return nannyAppRepository.findByDayAndTime(day, time);
	}


	@Override
	public void saveOrUpdateTask(NannyApp nannyapp) {
		nannyAppRepository.save(nannyapp);
	}

	@Override
	public void deleteTask(String id) {
		nannyAppRepository.delete(id);		
	}

	
	@Override
	public List<NannyApp> findByDay(String day) {
		return nannyAppRepository.findByDay(day);
	}

}