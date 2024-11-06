import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Grid,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import {
  Google,
  Facebook,
  GitHub,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import axios from "axios";


const JobSeeker = () => {
 
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    surname: "",
    email: "",
    password: "",
    mobileNumber: "",
    workStatus: "",
    promotions: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const filteredData = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value !== "")
  );

    try {
      const response = await axios.post(
        "http://localhost:5000/v1/api/jobseekers/register",
        filteredData
      );
      console.log("Register successful", response.data);
      alert(response.data.message);
    } catch (error) {
      console.error("Error registering job seeker:", error);
      alert(
        "Registration failed: " + error.response?.data?.message ||
          "An error occurred"
      );
    }
  };
 

  
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          backgroundColor: "white",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Create your AI Job Portal Profile
        </Typography>
        <Typography variant="body2" align="center">
          Search & apply to jobs from India’s No.1 Job Site
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="First Name"
                name="firstName"
                variant="outlined"
                fullWidth
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Middle Name"
                name="middleName"
                variant="outlined"
                fullWidth
                value={formData.middleName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Last Name"
                name="lastName"
                variant="outlined"
                fullWidth
          
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Surname"
                name="surname"
                variant="outlined"
                fullWidth
                required
                value={formData.surname}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Email ID"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
                helperText="We'll send relevant jobs and updates to this email."
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                required
                value={formData.password}
                onChange={handleChange}
                helperText="Minimum 6 characters."
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
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Mobile Number"
                name="mobileNumber"
                variant="outlined"
                fullWidth
                required
                value={formData.mobileNumber}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+91</InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1">Work Status</Typography>
              <RadioGroup
                row
                name="workStatus"
                value={formData.workStatus}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="fresher"
                  control={<Radio />}
                  label="I'm a Fresher"
                />
                <FormControlLabel
                  value="experienced"
                  control={<Radio />}
                  label="I'm Experienced"
                />
              </RadioGroup>
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="promotions"
                    checked={formData.promotions}
                    onChange={handleChange}
                  />
                }
                label="Send me important updates & promotions via SMS, email, and WhatsApp."
              />
            </Grid>

            <Grid item xs={12}>
            
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
             
              >
                Register Now
              </Button>
         
            </Grid>
          </Grid>
        </form>

        <Typography variant="body2" align="center" mt={3}>
          Or continue with
        </Typography>
        <Box display="flex" justifyContent="center" mt={1}>
          <Button startIcon={<Google />} color="inherit">
            Google
          </Button>
          <Button startIcon={<Facebook />} color="inherit">
            Facebook
          </Button>
          <Button startIcon={<GitHub />} color="inherit">
            GitHub
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default JobSeeker;
