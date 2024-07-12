import React from 'react';
import { TextField, Button, Box, MenuItem, Grid, Paper, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
const BookingForm = () => {
  const pickupPoints = ['Kansas', 'Dallas', 'Wichita', 'Emi Davenport'];
  const droppingPoints = ['Kansas', 'Dallas', 'Wichita', 'Emi Davenport'];

  return (
    <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Choose Your Ticket
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              select
              label="Pickup Point"
              fullWidth
              required
            >
              {pickupPoints.map((point) => (
                <MenuItem key={point} value={point}>
                  {point}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              select
              label="Dropping Point"
              fullWidth
              required
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
  );
};

export default BookingForm;
