package com.klu.demo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface loginRepositry extends JpaRepository<Signup, Long> {
    Optional<Signup> findByUsername(String username);
}