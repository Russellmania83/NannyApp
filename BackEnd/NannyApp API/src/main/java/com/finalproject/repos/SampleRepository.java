package com.finalproject.repos;

import org.springframework.data.repository.CrudRepository;

import com.finalproject.models.Sample;

public interface SampleRepository extends CrudRepository<Sample,Long> {

}
