import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Paper, Typography, IconButton, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const AddRouteForm = () => {
  const [routeName, setRouteName] = useState('');
  const [routeNumber, setRouteNumber] = useState('');
  const [startPoint, setStartPoint] = useState('');
  const [destination, setDestination] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [journeyTime, setJourneyTime] = useState({ hours: '0', minutes: '0' });
  const [halts, setHalts] = useState(['']);

  const handleHaltChange = (index, value) => {
    const newHalts = [...halts];
    newHalts[index] = value;
    setHalts(newHalts);
  };

  const handleAddHalt = () => {
    setHalts([...halts, '']);
  };

  const handleRemoveHalt = (index) => {
    const newHalts = [...halts];
    newHalts.splice(index, 1);
    setHalts(newHalts);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const journeyTimeFormatted = `${journeyTime.hours}:${journeyTime.minutes}`;
    console.log('Route Added:', { routeName, routeNumber, startPoint, destination, departureTime, journeyTime: journeyTimeFormatted, halts });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px auto', width: '60%' }}>
      <Paper elevation={3} sx={{ padding: 2, width: '100%', maxWidth: 600 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Add a New Route
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Route Name"
                fullWidth
                required
                value={routeName}
                onChange={(e) => setRouteName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Route Number"
                fullWidth
                required
                value={routeNumber}
                onChange={(e) => setRouteNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Starting Point"
                fullWidth
                required
                value={startPoint}
                onChange={(e) => setStartPoint(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Destination"
                fullWidth
                required
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
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
              <Typography variant="subtitle1">Journey Time</Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Hours</InputLabel>
                    <Select
                      value={journeyTime.hours}
                      onChange={(e) => setJourneyTime({ ...journeyTime, hours: e.target.value })}
                    >
                      {[...Array(24)].map((_, index) => (
                        <MenuItem key={index} value={index}>
                          {index}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Minutes</InputLabel>
                    <Select
                      value={journeyTime.minutes}
                      onChange={(e) => setJourneyTime({ ...journeyTime, minutes: e.target.value })}
                    >
                      {[0, 15, 30, 45].map((minute) => (
                        <MenuItem key={minute} value={minute}>
                          {minute}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            {halts.map((halt, index) => (
              <Grid item xs={12} key={index}>
                <TextField
                  label={`Halt ${index + 1}`}
                  fullWidth
                  value={halt}
                  onChange={(e) => handleHaltChange(index, e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <>
                        {halts.length > 1 && (
                          <IconButton onClick={() => handleRemoveHalt(index)}>
                            <RemoveIcon />
                          </IconButton>
                        )}
                        {index === halts.length - 1 && (
                          <IconButton onClick={handleAddHalt}>
                            <AddIcon />
                          </IconButton>
                        )}
                      </>
                    ),
                  }}
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Add Route
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default AddRouteForm;
