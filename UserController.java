package com.klu.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    // Endpoint to register a new user
    @PostMapping("/signup")
    public Signup addUser(@RequestBody Signup user) {
        return userService.registerUser(user);
    }

    // Endpoint to authenticate user
    @PostMapping("/login")
    public String loginUser(@RequestBody Login login) {
        return userService.authenticateUser(login);
    }

    // Get all users (optional endpoint)
    @GetMapping("/")
    public List<Signup> getUsers() {
        return userService.getAllUsers();
    }
}
