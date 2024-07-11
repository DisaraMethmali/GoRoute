import React from 'react';
import BookingForm from '../components/BookingForm';
import { Container, Box, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
          Get Your Ticket Online, Easy and Safely
        </Typography>
        <BookingForm />
      </Box>
    </Container>
  );
};

export default HomePage;
