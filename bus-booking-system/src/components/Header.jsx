import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: 'background.paper', height: 55 }}>
      <Toolbar sx={{ minHeight: 55 }}>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
            <Box display="flex" alignItems="center">
              <Typography variant="h6" component="div" sx={{ color: 'text.primary' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                  <img src="path/to/logo.png" alt="" style={{ height: 40, marginRight: 10 }} />
                </Link>
              </Typography>
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{ textDecoration: 'none', color: 'black', mx: 2, fontSize: 16, fontFamily: 'Poppins' }}
              >
                Home
              </Typography>
              <Typography
                variant="h6"
                component={Link}
                to="/about"
                sx={{ textDecoration: 'none', color: 'black', mx: 2, fontSize: 16, fontFamily: 'Poppins' }}
              >
                About
              </Typography>
              <Typography
                variant="h6"
                component={Link}
                to="/services"
                sx={{ textDecoration: 'none', color: 'black', mx: 2, fontSize: 16, fontFamily: 'Poppins' }}
              >
                Services
              </Typography>
              <Typography
                variant="h6"
                component={Link}
                to="/contact"
                sx={{ textDecoration: 'none', color: 'black', mx: 2, fontSize: 16, fontFamily: 'Poppins' }}
              >
                Contact
              </Typography>
              <Typography
                variant="h6"
                component={Link}
                to="/book"
                sx={{ textDecoration: 'none', color: 'black', mx: 2, fontSize: 16, fontFamily: 'Poppins' }}
              >
                Search trip
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Button
                component={Link}
                to="/login"
                variant="contained"
                sx={{ bgcolor: '#C6D9F6', color: 'text.primary', ml: 2, fontSize: 14, fontFamily: 'Poppins' }}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/signup"
                variant="contained"
                sx={{ bgcolor: '#283646', color: 'white', ml: 2, fontSize: 14, fontFamily: 'Poppins' }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
