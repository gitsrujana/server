import React from "react";
import { Container, Grid, Typography, Box, Paper, ButtonBase, TextField, InputAdornment, Button } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import StarIcon from "@mui/icons-material/Star";
import LightbulbIcon from "@mui/icons-material/Lightbulb"; // Import LightbulbIcon for Tips

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ backgroundColor: "#f3f0ff", py: 4, borderRadius: 3 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" gutterBottom>
          Job Application
        </Typography>
        
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          flexDirection={{ xs: 'column', sm: 'row' }}
          padding={2}
          sx={{ backgroundColor: '#E3E3E3', borderRadius: 2 }}
        >
          <SearchIcon />
          <TextField
            variant="outlined"
            placeholder="Salary Range"
            sx={{
              "& .MuiOutlinedInput-root": { borderRadius: 4, backgroundColor: '#FFFFFF'  },
              width: { xs: "100%", sm: "auto" }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            variant="outlined"
            placeholder="Job Experience"
            sx={{
              "& .MuiOutlinedInput-root": { borderRadius: 4, backgroundColor: '#FFFFFF' },
              width: { xs: "100%", sm: "auto" }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BusinessCenterIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            variant="outlined"
            placeholder="Location Job Range"
            sx={{
              "& .MuiOutlinedInput-root": { borderRadius: 4, backgroundColor: '#FFFFFF' },
              width: { xs: "100%", sm: "auto" }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon />
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            color="primary"
            sx={{ backgroundColor: '#000000', color: '#fff', borderRadius: 2 }}
          >
            Search more
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <ButtonBase component={Link} to="/personalized-job-matches" sx={{ width: "100%" }}>
                <Paper sx={{ p: { xs: 4, sm: 6 }, textAlign: "center", backgroundColor: "#FDFDFD", borderRadius: 4 }}>
                  <WorkIcon sx={{ fontSize: { xs: 30, sm: 40 }, color: "#ff9800" }} />
                  <Typography variant="h6">Personalized Job Matches</Typography>
                  <Typography>Find job opportunities tailored to your skills and career goals.</Typography>
                </Paper>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ButtonBase component={Link} to="/popular-job-categories" sx={{ width: "100%" }}>
                <Paper sx={{ p: { xs: 4, sm: 6 }, textAlign: "center", backgroundColor: "#FEF7EF", borderRadius: 4 }}>
                  <AssessmentIcon sx={{ fontSize: { xs: 30, sm: 40 }, color: "#e57373" }} />
                  <Typography variant="h6">Popular Job Categories</Typography>
                  <Typography>Browse top industries like IT, Healthcare, and Sales with ease.</Typography>
                </Paper>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ButtonBase component={Link} to="/saved-jobs" sx={{ width: "100%" }}>
                <Paper sx={{ p: { xs: 4, sm: 6 }, textAlign: "center", backgroundColor: "#1B1E2F", color: "#fff", borderRadius: 4 }}>
                  <BookmarkIcon sx={{ fontSize: { xs: 30, sm: 40 }, color: "#fff" }} />
                  <Typography variant="h6">Saved Jobs</Typography>
                  <Typography>Quickly access and manage the jobs you've saved for later.</Typography>
                </Paper>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ButtonBase component={Link} to="/track-applications" sx={{ width: "100%" }}>
                <Paper sx={{ p: { xs: 4, sm: 6 }, textAlign: "center", backgroundColor: "#A197DB", borderRadius: 4 }}>
                  <NotificationsIcon sx={{ fontSize: { xs: 30, sm: 40 }, color: "#3f51b5" }} />
                  <Typography variant="h6">Track Applications</Typography>
                  <Typography>Stay updated on your application status and upcoming interviews.</Typography>
                </Paper>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ButtonBase component={Link} to="/interview-preparation" sx={{ width: "100%" }}>
                <Paper sx={{ p: { xs: 4, sm: 6 }, textAlign: "center", backgroundColor: "#EF9E6F", borderRadius: 4 }}>
                  <LibraryBooksIcon sx={{ fontSize: { xs: 30, sm: 40 }, color: "white" }} />
                  <Typography variant="h6">Interview Preparation</Typography>
                  <Typography>Get resources and tips to ace your next interview.</Typography>
                </Paper>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ButtonBase component={Link} to="/premium-access" sx={{ width: "100%" }}>
                <Paper sx={{ p: { xs: 4, sm: 6 }, textAlign: "center", backgroundColor: "#F2EFFA", color: "#000000", borderRadius: 4 }}>
                  <StarIcon sx={{ fontSize: { xs: 30, sm: 40 }, color: "#000000" }} />
                  <Typography variant="h6">Premium Access</Typography>
                  <Typography>Enjoy basic features free or upgrade for advanced tools and support.</Typography>
                </Paper>
              </ButtonBase>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          <ButtonBase component={Link} to="/help-support" sx={{ width: "100%" }}>
            <Paper sx={{ p: { xs: 2, sm: 3 }, mb: 2, backgroundColor: "#F36A5F ", borderRadius: 4 }}>
              <Typography variant="h6" sx={{ color: "white" }}>
                Help & Support Box
              </Typography>
              <Typography>"Need assistance? Our team is here to guide you every step of the way!"</Typography>
            </Paper>
          </ButtonBase>
          
          <ButtonBase component={Link} to="/saved-categories" sx={{ width: "100%" }}>
            <Paper sx={{ p: { xs: 2, sm: 3 }, mb: 2, backgroundColor: "#FCFCFC", borderRadius: 4 }}>
              <Typography variant="h6">Saved Job Categories</Typography>
              <Box display="flex" alignItems="center" mb={1}>
                <FavoriteIcon sx={{ mr: 1 }} />
                <Typography>AI-Powered Job Search</Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                Find the perfect match with intelligent, AI-driven job recommendations.
              </Typography>
              <Box display="flex" alignItems="center" mb={1}>
                <TrendingUpIcon sx={{ mr: 1 }} />
                <Typography>Top Companies Hiring</Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                Discover leading companies actively looking for talent like you.
              </Typography>
              <Box display="flex" alignItems="center" mb={1}>
                <NotificationsIcon sx={{ mr: 1 }} />
                <Typography>Instant Job Alerts</Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                Get notified immediately when new job opportunities arise.
              </Typography>
            </Paper>
          </ButtonBase>

          <ButtonBase sx={{ width: "100%" ,marginTop:"5%"}}>
            <Paper sx={{ p: { xs: 3, sm: 4 }, backgroundColor: "#FCFCFC", borderRadius: 4, textAlign: "center" }}>
              <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
                <LightbulbIcon sx={{ fontSize: 40, color: "#000" }} /> 
                <Typography variant="h6" sx={{ ml: 1, fontWeight: "bold", p: 0.5, borderRadius: 1 }}>
                  Tips Box
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" textAlign="center">
                Explore job alerts, quick apply features, and resume tips!
              </Typography>
            </Paper>
          </ButtonBase>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;