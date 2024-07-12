import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import Header from '../components/Header';
import serviceImage from '../assets/service.png'; // Example service image
import Footer from '../components/Footer';

const ServicePage = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSearch = () => {
    // Handle search functionality here
    console.log('Searching from:', from, 'to:', to);
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box sx={{ bgcolor: '#fefefe', pt: 8 }}>
          <Container maxWidth="lg">
            <Box sx={{ mt: 4, textAlign: 'center', position: 'relative' }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: '32px',
                  color: '#727272',
                  fontFamily: 'Poppins',
                  fontWeight: 'bold',
                  mb: 4,
                }}
              >
              Search Your Destination
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '20px',
                      color: '#727272',
                      fontFamily: 'Poppins',
                      mb: 1,
                    }}
                  >
                    From
                  </Typography>
                  <TextField
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    variant="outlined"
                    fullWidth
                    sx={{ borderRadius: '50px', '& fieldset': { borderRadius: '50px' } }}
                  />
                </Box>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '20px',
                      color: '#727272',
                      fontFamily: 'Poppins',
                      mb: 1,
                    }}
                  >
                    To
                  </Typography>
                  <TextField
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    variant="outlined"
                    fullWidth
                    sx={{ borderRadius: '50px', '& fieldset': { borderRadius: '50px' } }}
                  />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                  <Button 
                    variant="contained" 
                    onClick={handleSearch} 
                    sx={{
                      borderRadius: '50px',
                      padding: '10px 24px',
                    }}
                  >
                    Search
                  </Button>
                </Box>
              </Box>
              <Box sx={{ mt: 4 }}>
                <Box
                  component="img"
                  src={serviceImage}
                  alt="Service Image"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '20px',
                    display: 'block',
                    mx: 'auto',
                    maxWidth: '800px',
                  }}
                />
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '20px',
                  color: '#727272',
                  fontFamily: 'Poppins',
                  mt: 4,
                  textAlign: 'justify',
                }}
              >
                Our services are designed to provide you with the best travel experience. Whether you are traveling locally or long-distance, we offer a range of services to meet your needs. Our reliable and efficient service ensures that you reach your destination safely and comfortably.
              </Typography>
            </Box>
          </Container>
        </Box>
        <Box sx={{ mt: 4, flexGrow: 1 }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default ServicePage;
