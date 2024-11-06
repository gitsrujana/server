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

const Qualificationdetails = () => {
  const mediaViewPort = useMediaQuery("(min-width:600px)");
  const [formData, setFormData] = useState({
    education: "",
    university: "",
    fieldOfStudy: "",
    graduationYear: "",
    grade: "",
    additional: "",
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
        "http://localhost:5000/v1/api/qualifications/register",
        formData
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error registering:", error);
      alert("Registration failed");
    }
  };

  return (
    <Grid
      container
      justifyContent="start"
      alignItems="center"
      style={{ minHeight: "100vh",width:"100vw" ,marginTop:mediaViewPort?"-15%":"2%"}}
    >
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Box
          sx={{
            p: 4,
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            Qualification Details
          </Typography>
          <Typography variant="body2" align="center" gutterBottom>
            Details like course, university, and more, help recruiters identify
            your educational background.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" required>
                  <InputLabel>Education</InputLabel>
                  <Select
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    label="Education"
                  >
                    <MenuItem value="">
                      <em>Select education</em>
                    </MenuItem>
                    <MenuItem value="Bachelor's">Bachelor's</MenuItem>
                    <MenuItem value="Master's">Master's</MenuItem>
                    <MenuItem value="PhD">PhD</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" required>
                  <InputLabel>University/Institute</InputLabel>
                  <Select
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    label="University/Institute"
                  >
                    <MenuItem value="">
                      <em>Select University/Institute</em>
                    </MenuItem>
                    <MenuItem value="Harvard">Harvard</MenuItem>
                    <MenuItem value="MIT">MIT</MenuItem>
                    <MenuItem value="Stanford">Stanford</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Field of Study</InputLabel>
                  <Select
                    name="fieldOfStudy"
                    value={formData.fieldOfStudy}
                    onChange={handleChange}
                    label="Field of Study"
                  >
                    <MenuItem value="">
                      <em>Select Course</em>
                    </MenuItem>
                    <MenuItem value="Computer Science">
                      Computer Science
                    </MenuItem>
                    <MenuItem value="Engineering">Engineering</MenuItem>
                    <MenuItem value="Business">Business</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Graduation Year</InputLabel>
                  <Select
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    label="Graduation Year"
                  >
                    <MenuItem value="">
                      <em>Select Year</em>
                    </MenuItem>
                    <MenuItem value="2020">2020</MenuItem>
                    <MenuItem value="2021">2021</MenuItem>
                    <MenuItem value="2022">2022</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Grade / Percentage / GPA"
                  name="grade"
                  placeholder="Enter your grade, percentage or GPA"
                  value={formData.grade}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Additional"
                  name="additional"
                  placeholder="Any additional information"
                  value={formData.additional}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                xs={12}
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Button variant="text" color="primary">
                  Skip
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Qualificationdetails;
