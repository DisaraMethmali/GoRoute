import React from 'react';
import {
  Card, CardContent, Typography, Grid, Box, Chip, Divider,
} from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PowerIcon from '@mui/icons-material/Power';
import StopCircleIcon from '@mui/icons-material/StopCircle';

function AvailableBus({ bus }) {
  return (
    <Card sx={{ maxWidth: 700, margin: '20px auto', padding: '16px' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {bus.features.ac ? 'A/C' : 'Non A/C'} Bus
        </Typography>
        <Divider sx={{ margin: '8px 0' }} />
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              Departure Time
            </Typography>
            <Typography variant="body1">
              {bus.departureTime}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              Journey Time
            </Typography>
            <Typography variant="body1">
              {bus.journeyTime}
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginY: 2 }}>
          {bus.features.ac && <AcUnitIcon />}
          {bus.features.wifi && <WifiIcon />}
          {bus.features.phoneCharger && <PowerIcon />}
          <Box display="flex" alignItems="center">
            <StopCircleIcon />
            <Typography variant="body2" sx={{ marginLeft: '4px' }}>1 Rest Stop</Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginBottom: 2 }}>
          <Typography variant="h5">
            Rs. 490.00
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="h6" color="primary" sx={{ marginRight: '6px' }}>4.5</Typography>
            <Typography variant="body2" color="textSecondary">108</Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ marginY: 2 }}>
          <Typography variant="body1" align="center">
            {bus.startPoint}
            <Box component="span" sx={{ display: 'inline-block', marginX: 2 }}>➔</Box>
            {bus.destination}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2">
            28 Dec 2021
          </Typography>
          <Chip label="Up Coming" color="success" />
        </Box>
      </CardContent>
    </Card>
  );
}

export default AvailableBus;
