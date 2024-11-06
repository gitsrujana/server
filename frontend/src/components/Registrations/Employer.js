import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";

const Employer = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    contactNumber: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/v1/api/employers/",
        formData
      );
      console.log("register successfull", response.data);
      alert(response.data.message);
    } catch (error) {
      console.error("Error registering employer:", error);
      alert("Registration failed");
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Employer Registration
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Company Name"
          name="companyName"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          value={formData.companyName}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          required
          margin="normal"
          value={formData.password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Contact Number"
          name="contactNumber"
          type="tel"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          value={formData.contactNumber}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Employer;
