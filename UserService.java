package com.klu.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Signup registerUser(Signup user) {
        ; // Ensure a new user is created
        return userRepository.save(user);
    }

    public String authenticateUser(Login login) {
        Signup user = userRepository.findByUsername(login.getUsername());
        if (user != null && user.getPassword().equals(login.getPassword())) {
            return "Login Successful";
        }
        return "Invalid Credentials";
    }

    public List<Signup> getAllUsers() {
        return userRepository.findAll();
    }
}

   

   

