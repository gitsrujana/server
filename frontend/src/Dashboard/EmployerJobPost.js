import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Box,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
  Card,
  CardContent,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import axios from "axios";

const EmployerJobPost = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobLocation: "",
    openings: "",
    experienceLevel: "",
    minSalary: "",
    maxSalary: "",
    bonus: "No",
    jobDescription: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.jobTitle) formErrors.jobTitle = "Job Title is required";
    if (!formData.jobLocation)
      formErrors.jobLocation = "Job Location is required";
    if (!formData.openings)
      formErrors.openings = "Number of Openings is required";
    if (!formData.jobDescription)
      formErrors.jobDescription = "Job Description is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/v1/api/employer-jobpost/jobs",
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
    <Container maxWidth="md">
      <Box
        sx={{
          backgroundColor: "#003366",
          color: "#fff",
          p: 3,
          borderRadius: 1,
          mb: 4,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Post Your Job in Minutes!
        </Typography>
        <Typography variant="body1" align="center">
          Instant visibility to top talent across industries
          <br />
          Unlimited direct calls from qualified applicants
          <br />
          Access to 35 million+ candidates for your ideal hire
        </Typography>
        <Box textAlign="center" mt={2}>
          <Button variant="contained" color="primary">
            POST JOB
          </Button>
        </Box>
      </Box>

      <Typography variant="h6" gutterBottom textAlign="start">
        Basic Job Details
      </Typography>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Job Title"
                name="jobTitle"
                variant="outlined"
                fullWidth
                required
                placeholder="Enter the job title"
                value={formData.jobTitle}
                onChange={handleChange}
                error={!!errors.jobTitle}
                helperText={errors.jobTitle}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!errors.jobLocation}>
                <InputLabel>Job Location</InputLabel>
                <Select
                  name="jobLocation"
                  value={formData.jobLocation}
                  onChange={handleChange}
                  required
                  fullWidth
                >
                  <MenuItem value="Mumbai">Mumbai</MenuItem>
                  <MenuItem value="Delhi">Delhi</MenuItem>
                  <MenuItem value="Bangalore">Bangalore</MenuItem>
                  <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                  <MenuItem value="Pune">Pune</MenuItem>
                </Select>
                {errors.jobLocation && (
                  <Typography variant="body2" color="error">
                    {errors.jobLocation}
                  </Typography>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="No Of Openings"
                name="openings"
                variant="outlined"
                fullWidth
                required
                placeholder="e.g. 2"
                value={formData.openings}
                onChange={handleChange}
                error={!!errors.openings}
                helperText={errors.openings}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Typography variant="h6" gutterBottom textAlign="start">
        Candidate Requirement
      </Typography>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1" textAlign="start">
                Total Experience of Candidate
              </Typography>
              <Box display="flex" gap={2} mt={1}>
                <Button
                  variant={
                    formData.experienceLevel === "Any"
                      ? "contained"
                      : "outlined"
                  }
                  onClick={() =>
                    setFormData({ ...formData, experienceLevel: "Any" })
                  }
                >
                  Any
                </Button>
                <Button
                  variant={
                    formData.experienceLevel === "Freshers Only"
                      ? "contained"
                      : "outlined"
                  }
                  onClick={() =>
                    setFormData({
                      ...formData,
                      experienceLevel: "Freshers Only",
                    })
                  }
                >
                  Freshers Only
                </Button>
                <Button
                  variant={
                    formData.experienceLevel === "Experienced only"
                      ? "contained"
                      : "outlined"
                  }
                  onClick={() =>
                    setFormData({
                      ...formData,
                      experienceLevel: "Experienced only",
                    })
                  }
                >
                  Experienced only
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Minimum Salary"
                name="minSalary"
                variant="outlined"
                fullWidth
                placeholder="e.g. 10000"
                value={formData.minSalary}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Maximum Salary"
                name="maxSalary"
                variant="outlined"
                fullWidth
                placeholder="e.g. 15000"
                value={formData.maxSalary}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1" textAlign="start">
                Do you offer a bonus in addition to monthly salary?
              </Typography>
              <RadioGroup
                row
                name="bonus"
                value={formData.bonus}
                onChange={handleChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Job Info / Job Description"
                name="jobDescription"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
                placeholder="Enter the job description"
                value={formData.jobDescription}
                onChange={handleChange}
                error={!!errors.jobDescription}
                helperText={errors.jobDescription}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Box textAlign="right" mt={2}>
        <Typography variant="body2" color="primary">
          Need Help? Call Us at 8712349669
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Submit Job
        </Button>
      </Box>
    </Container>
  );
};

export default EmployerJobPost;
