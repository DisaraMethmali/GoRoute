import React from 'react';
import { TextField, Button, Box, MenuItem, Grid, Paper, Typography } from '@mui/material';

const BookingForm = () => {
  const pickupPoints = ['Kansas', 'Dallas', 'Wichita', 'Emi Davenport'];
  const droppingPoints = ['Kansas', 'Dallas', 'Wichita', 'Emi Davenport'];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '100px auto', width: '60%' }}>
      <Paper elevation={3} sx={{ padding: 2, width: '100%', maxWidth: 600 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Choose Your Ticket
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                select
                label="From"
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
            <Grid item xs={12}>
              <TextField
                select
                label="To"
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
              <TextField
                label="Departure Time"
                type="time"
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
    </Box>
  );
};

export default BookingForm;
