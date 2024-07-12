import React, { useState } from 'react';
import { TextField, Button, Box, MenuItem, Grid, Paper, Typography } from '@mui/material';

const BookingForm = ({ onSearch }) => {
  const pickupPoints = ['Kansas', 'Dallas', 'colombo', 'Emi Davenport'];
  const droppingPoints = ['Kansas', 'Dallas', 'peradeni', 'Emi Davenport'];

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [departureTime, setDepartureTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ from, to, departureDate, departureTime });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '100px auto', width: '60%' }}>
      <Paper elevation={3} sx={{ padding: 2, width: '100%', maxWidth: 600 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Choose Your Ticket
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                select
                label="From"
                fullWidth
                required
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              >
                {pickupPoints.map((point) => (
                  <MenuItem key={point} value={point}>
                    {point}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                label="To"
                fullWidth
                required
                value={to}
                onChange={(e) => setTo(e.target.value)}
              >
                {droppingPoints.map((point) => (
                  <MenuItem key={point} value={point}>
                    {point}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Departure Date"
                type="date"
                fullWidth
                required
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Departure Time"
                type="time"
                fullWidth
                required
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Find Tickets
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default BookingForm;
