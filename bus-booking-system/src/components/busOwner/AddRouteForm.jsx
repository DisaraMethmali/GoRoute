import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Paper, Typography, IconButton, Select, MenuItem, FormControl, InputLabel, Container, FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const AddRouteForm = () => {
  const [routeNumber, setRouteNumber] = useState('');
  const [startPoint, setStartPoint] = useState('');
  const [destination, setDestination] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [journeyTime, setJourneyTime] = useState({ hours: '0', minutes: '0' });
  const [halts, setHalts] = useState(['']);
  const [features, setFeatures] = useState({
    ac: false,
    wifi: false,
    phoneCharger: false,
  });

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

  const handleFeatureChange = (event) => {
    setFeatures({ ...features, [event.target.name]: event.target.checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const journeyTimeFormatted = `${journeyTime.hours}:${journeyTime.minutes}`;
    console.log('Route Added:', { routeNumber, startPoint, destination, departureTime, journeyTime: journeyTimeFormatted, halts, features });
  };

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '20px' }}>
        <Paper elevation={6} sx={{ padding: 4, width: '100%', maxWidth: 600, borderRadius: '15px' }}>
          <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ color: '#1976d2' }}>
            Add a New Route
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Route Number"
                  fullWidth
                  required
                  value={routeNumber}
                  onChange={(e) => setRouteNumber(e.target.value)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Starting Point"
                  fullWidth
                  required
                  value={startPoint}
                  onChange={(e) => setStartPoint(e.target.value)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Destination"
                  fullWidth
                  required
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  variant="outlined"
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
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Journey Time
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormControl fullWidth required variant="outlined">
                      <InputLabel>Hours</InputLabel>
                      <Select
                        value={journeyTime.hours}
                        onChange={(e) => setJourneyTime({ ...journeyTime, hours: e.target.value })}
                        label="Hours"
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
                    <FormControl fullWidth required variant="outlined">
                      <InputLabel>Minutes</InputLabel>
                      <Select
                        value={journeyTime.minutes}
                        onChange={(e) => setJourneyTime({ ...journeyTime, minutes: e.target.value })}
                        label="Minutes"
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
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Available Features
                </Typography>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={features.ac}
                        onChange={handleFeatureChange}
                        name="ac"
                      />
                    }
                    label="AC"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={features.wifi}
                        onChange={handleFeatureChange}
                        name="wifi"
                      />
                    }
                    label="WiFi"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={features.phoneCharger}
                        onChange={handleFeatureChange}
                        name="phoneCharger"
                      />
                    }
                    label="Phone Charger"
                  />
                </FormGroup>
              </Grid>
              {halts.map((halt, index) => (
                <Grid item xs={12} key={index}>
                  <TextField
                    label={`Halt ${index + 1}`}
                    fullWidth
                    value={halt}
                    onChange={(e) => handleHaltChange(index, e.target.value)}
                    variant="outlined"
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
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ padding: '10px', fontSize: '16px' }}>
                  Add Route
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default AddRouteForm;
