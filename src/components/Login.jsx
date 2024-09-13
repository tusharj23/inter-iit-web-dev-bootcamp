import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, TextField, Button, Checkbox, FormControlLabel, Typography, Link, InputAdornment, IconButton,
} from '@mui/material';
import { AccountCircle, Lock, Brightness4, Brightness7 } from '@mui/icons-material'; // Icons for dark/light mode
import { styled } from '@mui/system';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false); // New state for theme
  const navigate = useNavigate();

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard'); // Redirect to the dashboard without checking credentials
  };

  // Toggle between dark and light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <StyledLoginPage darkMode={darkMode}>
      <Box className="theme-toggle">
        <IconButton onClick={toggleDarkMode} color="inherit">
          {darkMode ? <Brightness7 sx={{ color: 'white' }} /> : <Brightness4 sx={{ color: 'black' }} />} {/* Improved visibility in dark mode */}
        </IconButton>
      </Box>

      <Box className="login-container">
        <Box className="login-form">
          {error && <Typography color="error">{error}</Typography>}
          <form onSubmit={handleLogin}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
                style: { backgroundColor: 'white' }, // Always white background
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                style: { backgroundColor: 'white' }, // Always white background
              }}
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember me"
            />
            <Link href="#" className="forgot-password">
              Forgot password?
            </Link>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="login-btn"
            >
              Log in
            </Button>
          </form>
          <Typography variant="body2" className="register-text">
            Or <Link href="#">register now!</Link>
          </Typography>
        </Box>

        {/* Conditionally render the image based on darkMode */}
        <Box className="login-image">
          {darkMode ? (
            <img
              src="https://github.com/tusharj23/images_project/blob/main/Screenshot%202024-09-13%20215255.png?raw=true"
              alt="Login Dark Mode"
            />
          ) : (
            <img
              src="https://github.com/tusharj23/images_project/blob/main/Screenshot%202024-09-13%20212107.png?raw=true"
              alt="Login Light Mode"
            />
          )}
        </Box>
      </Box>
    </StyledLoginPage>
  );
};

// Styling for the login page with dark mode support
const StyledLoginPage = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ darkMode }) => (darkMode ? '#212121' : '#f8f8f8')};
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#000')};

  .theme-toggle {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .login-container {
    display: flex;
    background: ${({ darkMode }) => (darkMode ? '#694BDB' : '#fff')};
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 60%;
    max-width: 100%;
    flex-direction: row;

    @media (max-width: 960px) {
      flex-direction: column;
    }
  }

  .login-form {
    padding: 40px;
    flex: 1;
    @media (max-width: 600px) {
      padding: 20px;
    }
  }

  .login-btn {
    margin-top: 20px;
    background-color: ${({ darkMode }) => (darkMode ? 'black' : '#6a1b9a')}; 
    color: #fff;
    &:hover {
      background-color: ${({ darkMode }) => (darkMode ? 'grey' : '#8e24aa')}; 
    }
  }

  .forgot-password {
    display: inline-block;
    margin-top: 10px;
    font-size: 14px;
    color: ${({ darkMode }) => (darkMode ? '#fff' : '#6a1b9a')};
    &:hover {
      text-decoration: underline;
    }
  }

  .register-text {
    text-align: left;
    margin-top: 20px;
    font-size: 14px;
    a {
      color: ${({ darkMode }) => (darkMode ? '#bb86fc' : '#6a1b9a')};
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .login-image {
    background: ${({ darkMode }) => (darkMode ? '#694BDB' : '#fff')};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    width: 300px;
    img {
      max-width: 100%;
      height: auto;
    }

    @media (max-width: 960px) {
      width: 100%;
      padding: 20px;
    }
  }
`;

export default LoginPage;
