import React from 'react';
import { Box, Container } from '@mui/material';
import Header from '../components/Header';
import SearchBar from '../components/Search';
import img from '../assets/img.png';
import imgc from '../assets/imgc.png';
const HomePage = () => {
  return (
    <>
      <Header />
      <Box sx={{ bgcolor: '#fefefe', pt: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ mt: 4, textAlign: 'center', position: 'relative' }}>
            <Box
              component="img"
              src={img}
              alt="Descriptive Alt Text"
              sx={{
                width: '1300px',
                height: '678px',
                borderRadius: '50px',
                display: 'block',
                mx: 'auto',
              }}
            />
            <SearchBar/>
          </Box>
          <Box sx={{ mt: 4, textAlign: 'left', position: 'relative' }}>
            <Box
              component="img"
              src={imgc}
              alt="Descriptive Alt Text"
              sx={{
                width: '500px',
                height: '400px',
                borderRadius: '50px',
                display: 'block',
                mx: 'auto',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
