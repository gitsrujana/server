import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/assets'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { CgProfile } from 'react-icons/cg';
import { FaSearch } from 'react-icons/fa';
import { debounce } from 'lodash';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbaar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSearchValid, setIsSearchValid] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width:768px)');

  const handleLoginClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLoginClose = () => {
    setAnchorEl(null);
  };

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setIsSearchValid(false);
    } else {
      setIsSearchValid(true);
    }

    debouncedSearch(value);
  };

  const debouncedSearch = debounce((query) => {
    if (query.trim()) {
      console.log('Searching for:', query);
    }
  }, 500);

  const clearSearch = () => {
    setSearchTerm('');
    setIsSearchValid(true);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#fff', boxShadow: 'none', padding: '10px 0' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
        {/* Logo */}
        <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src={image} alt="Logo" style={{ height: 80, marginLeft: '20px' }} />
        </Box>

        {isMobile ? (
          // Mobile Menu
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon style={{ color: '#333' }} />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List sx={{ width: 250 }}>
                <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button onClick={handleLoginClick}>
                  <ListItemText primary="Login" />
                </ListItem>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleLoginClose}
                  PaperProps={{
                    style: {
                      marginTop: 10,
                      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  <MenuItem component={Link} to="/employer-login" onClick={handleLoginClose} style={{ fontSize: 15 }}>
                    Employer Login
                  </MenuItem>
                  <MenuItem component={Link} to="/jobseeker-login" onClick={handleLoginClose} style={{ fontSize: 15 }}>
                    Job Seeker Login
                  </MenuItem>
                  <MenuItem component={Link} to="/admin-login" onClick={handleLoginClose} style={{ fontSize: 15 }}>
                    Admin Login
                  </MenuItem>
                </Menu>
                <ListItem button component={Link} to="/employer-login" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Companies" />
                </ListItem>
                <ListItem button component={Link} to="/admin-login" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Services" />
                </ListItem>
                <ListItem button component={Link} to="/jobseeker" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Register" />
                </ListItem>
                <ListItem button component={Link} to="/admin-login" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Jobs" />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          // Desktop Menu
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Button component={Link} to="/" style={{ color: '#333', textTransform: 'none', fontSize: 16 }}>
              Home
            </Button>
            <Button
              color="inherit"
              onClick={handleLoginClick}
              style={{ color: '#333', textTransform: 'none', fontSize: 16 }}
            >
              Login
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleLoginClose}
              PaperProps={{
                style: {
                  padding: 0,
                  marginTop: 10,
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <MenuItem component={Link} to="/employer-login" onClick={handleLoginClose} style={{ fontSize: 15 }}>
                Employer Login
              </MenuItem>
              <MenuItem component={Link} to="/jobseeker-login" onClick={handleLoginClose} style={{ fontSize: 15 }}>
                Job Seeker Login
              </MenuItem>
              <MenuItem component={Link} to="/admin-login" onClick={handleLoginClose} style={{ fontSize: 15 }}>
                Admin Login
              </MenuItem>
            </Menu>
            <Button component={Link} to="/employer-login" style={{ color: '#333', textTransform: 'none', fontSize: 16 }}>
              Companies
            </Button>
            <Button component={Link} to="/admin-login" style={{ color: '#333', textTransform: 'none', fontSize: 16 }}>
              Services
            </Button>
            <Button
              component={Link}
              to="/jobseeker"
              variant="contained"
              style={{
                color: '#fff',
                backgroundColor: 'blue',
                textTransform: 'none',
                fontSize: 16,
                padding: '6px 16px',
                borderRadius: 8,
              }}
            >
              Register
            </Button>
            <Button component={Link} to="/admin-login" style={{ color: '#333', textTransform: 'none', fontSize: 16 }}>
              Jobs
            </Button>
          </Box>
        )}

        {/* Search Box */}
        {!isMobile && (
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search jobs here"
            value={searchTerm}
            onChange={handleSearchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaSearch style={{ color: '#999', fontSize: '0.9rem' }} />
                </InputAdornment>
              ),
              endAdornment: searchTerm && (
                <InputAdornment position="end">
                  <IconButton onClick={clearSearch} edge="end" size="small">
                    <span style={{ fontSize: '1rem', color: '#666' }}>✕</span>
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={!isSearchValid}
            style={{
              backgroundColor: '#f1f3f4',
              borderRadius: 5,
              width: 350,
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: isSearchValid ? '#ddd' : '#f44336',
                },
                '&:hover fieldset': {
                  borderColor: '#999',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#333',
                },
              },
            }}
          />
        )}

        {/* Notification and Profile Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <IconButton>
            <NotificationsNoneIcon style={{ color: '#333' }} />
          </IconButton>
          <IconButton component={Link} to="/userprofile">
            <CgProfile style={{ color: '#333', width: 30, height: 30 }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbaar;