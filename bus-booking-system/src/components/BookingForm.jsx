import React, { useState } from 'react';
import { Container, Box, TextField, Button, MenuItem, Typography } from '@mui/material';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    pickupPoint: '',
    droppingPoint: '',
    departureDate: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Choose Your Ticket
        </Typography>
        <TextField
          select
          name="pickupPoint"
          label="Pickup Point"
          value={formData.pickupPoint}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        >
          <MenuItem value="Kansas">Kansas</MenuItem>
          <MenuItem value="Dallas">Dallas</MenuItem>
          <MenuItem value="Wichita">Wichita</MenuItem>
          <MenuItem value="Emi Davenport">Emi Davenport</MenuItem>
        </TextField>
        <TextField
          select
          name="droppingPoint"
          label="Dropping Point"
          value={formData.droppingPoint}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        >
          <MenuItem value="Kansas">Kansas</MenuItem>
          <MenuItem value="Dallas">Dallas</MenuItem>
          <MenuItem value="Wichita">Wichita</MenuItem>
          <MenuItem value="Emi Davenport">Emi Davenport</MenuItem>
        </TextField>
        <TextField
          type="date"
          name="departureDate"
          label="Departure Date"
          value={formData.departureDate}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Find Tickets
        </Button>
      </Box>
    </Container>
  );
};

export default BookingForm;
