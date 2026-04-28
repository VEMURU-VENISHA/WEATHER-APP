package com.klu.demo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface WeatherRepository extends JpaRepository<Weather, Long> {
	Weather findByCity(String city);
}
	
