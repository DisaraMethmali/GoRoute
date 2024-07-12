import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';

const HeaderBusOwner = () => {
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
                to="/busOwner"
                sx={{ textDecoration: 'none', color: 'black', mx: 2, fontSize: 16, fontFamily: 'Poppins' }}
              >
                Home
              </Typography>
              <Typography
                variant="h6"
                component={Link}
                to="/busOwner/addRoute"
                sx={{ textDecoration: 'none', color: 'black', mx: 2, fontSize: 16, fontFamily: 'Poppins' }}
              >
                Add New Route
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Button
                component={Link}
                to="/"
                variant="contained"
                sx={{ bgcolor: '#283646', color: 'white', ml: 2, fontSize: 14, fontFamily: 'Poppins' }}
              >
                Log Out
              </Button>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBusOwner;
