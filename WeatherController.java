package com.klu.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class WeatherController {

    @Autowired
    private WeatherRepository weatherRepository;

    // Get weather by city (used by React input)
    @GetMapping("/weather")
    public ResponseEntity<Weather> getWeatherByCity(@RequestParam String city) {
        Weather weather = weatherRepository.findByCity(city);
        if (weather != null) {
            return ResponseEntity.ok(weather);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    // Add new weather data
    @PostMapping("/weather/add")
    public Weather addWeather(@RequestBody Weather weather) {
        return weatherRepository.save(weather);
    }

    // Get all weather data
    @GetMapping("/weather/all")
    public List<Weather> getAllWeather() {
        return weatherRepository.findAll();
    }
}
