package com.finalproject.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity

public class Sample {
	@Id
	private Integer id;
public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

private String info;

public String getInfo() {
	return info;
}

public void setInfo(String info) {
	this.info = info;
}
}
