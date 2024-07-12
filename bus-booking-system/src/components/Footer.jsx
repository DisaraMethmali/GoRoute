import React from 'react';
import { Box, Grid, Typography, Button, Link, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#282c34', color: 'white', py: 5, mt: 'auto', fontFamily: 'Poppins' }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ ml: '-150px' }}>
        <Grid item xs={12} md={2} sx={{ ml: '120px' }}>
          <Typography variant="h6" sx={{ color: '#3A86FF' }}>GoRoute</Typography>
          <Typography variant="body2" sx={{ mb: 2, fontFamily: 'Poppins' }}>
            GoRoute is your premier bus ticketing system, connecting you to destinations across the globe.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, fontFamily: 'Poppins' }}>Copyright GoRoute</Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="h6" sx={{ color: '#3A86FF' }}>Service</Typography>
          <Link href="#" color="inherit" underline="none">Book Tickets</Link><br />
          <Link href="#" color="inherit" underline="none">Manage Bookings</Link><br />
          <Link href="#" color="inherit" underline="none">Travel Info</Link><br />
          <Link href="#" color="inherit" underline="none">Customer Support</Link><br />
          <Link href="#" color="inherit" underline="none">Feedback</Link><br />
          <Link href="#" color="inherit" underline="none">Terms and Conditions</Link>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="h6" sx={{ color: '#3A86FF' }}>About</Typography>
          <Link href="#" color="inherit" underline="none">Company</Link><br />
          <Link href="#" color="inherit" underline="none">Team</Link><br />
          <Link href="#" color="inherit" underline="none">Partners</Link><br />
          <Link href="#" color="inherit" underline="none">Careers</Link><br />
          <Link href="#" color="inherit" underline="none">Blog</Link><br />
          <Link href="#" color="inherit" underline="none">Contact Us</Link>
        </Grid>
        <Grid item xs={12} md={2} sx={{ ml: '150px' }}>
          <Typography variant="h6" sx={{ color: '#3A86FF' }}>Join Our Newsletter</Typography>
          <Box display="flex" alignItems="left">
            <Button variant="contained" color="primary" sx={{ width: '250px' }}>Subscribe</Button>
          </Box>
          <Box mt={2}>
            <IconButton color="inherit"><Facebook /></IconButton>
            <IconButton color="inherit"><Twitter /></IconButton>
            <IconButton color="inherit"><Instagram /></IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ ml: '200px', textAlign: 'center', mt: 3 }}>
          <Divider sx={{ bgcolor: 'white', mb: 3 }} />
          <Typography variant="body1" sx={{ mb: 2, fontFamily: 'Poppins' }}>
            8819 Ohio St. South Gate, CA 90280<br />
            <Link href="mailto:contact@goroute.com" color="inherit" underline="none">contact@goroute.com</Link><br />
            +1 386-688-3295
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
