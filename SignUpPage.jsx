import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./SignUpPage.css"; // CSS styles

const API_URL = "http://localhost:8007/users";

const SignUpPage = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    phoneNumber: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/signup`, form);
      resetForm();
      navigate("/ThirdPage"); // Navigate after successful signup
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      location: "",
      phoneNumber: "",
      username: "",
      password: "",
    });
  };

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label>Location:</label>
        <input
          type="text"
          className="form-control"
          name="location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label>Phone number:</label>
        <input
          type="text"
          className="form-control"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label>Username:</label>
        <input
          type="text"
          className="form-control"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label>Password:</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <br /><br />

        <Button type="submit" variant="contained">Sign Up</Button>
      </form>

      <div>
        <img
          src="home_page.jpg"
          alt="Home Page"
          className="home-icon"
          onClick={() => navigate("/FirstPage")}
        />
      </div>
    </div>
  );
};

export default SignUpPage;
