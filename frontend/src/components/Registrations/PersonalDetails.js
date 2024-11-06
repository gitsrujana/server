import React, { useState } from "react";
import {
  Grid,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";

const Personaldetails = () => {
  const mediaViewPort = useMediaQuery("(min-width:600px)");
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    gender: "",
    nationality: "",
    languagePreference: "",
    healthCondition: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/v1/api/personal-details/register",
        formData
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error registering personal details:", error);
      alert("Registration failed");
    }
  };

  return (
    <Grid
      container
      justifyContent="start"
      alignItems="center"
      style={{ minHeight: "100vh", width: "100vw",marginTop:mediaViewPort?"-17%":"-5%"}}
    >
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Box
          sx={{
            p: 3,
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Typography variant="h6" align="center" gutterBottom>
              Personal Details
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  name="dateOfBirth"
                  placeholder="DD-MM-YYYY"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Gender</InputLabel>
                  <Select
                    value={formData.gender}
                    name="gender"
                    onChange={handleChange}
                    label="Gender"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Nationality</InputLabel>
                  <Select
                    value={formData.nationality}
                    name="nationality"
                    onChange={handleChange}
                    label="Nationality"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="American">American</MenuItem>
                    <MenuItem value="Canadian">Canadian</MenuItem>
                    <MenuItem value="Indian">Indian</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Language Preference</InputLabel>
                  <Select
                    value={formData.languagePreference}
                    name="languagePreference"
                    onChange={handleChange}
                    label="Language Preference"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Spanish">Spanish</MenuItem>
                    <MenuItem value="French">French</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Disability/Health Condition"
                  name="healthCondition"
                  placeholder="Any specific health condition?"
                  value={formData.healthCondition}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                xs={12}
                container
                spacing={2}
                justifyContent="space-between"
              >
                <Grid item>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="text" color="primary">
                    Skip
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Personaldetails;
