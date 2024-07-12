import React from 'react';
import { Box, Container, Typography, Avatar } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
// Example team image

import team from '../assets/team.jpeg';
const AboutPage = () => {
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
                  padding: '8px',
                  borderRadius: '8px',
                }}
              >
                About Us
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '20px',
                  color: '#727272',
                  fontFamily: 'Poppins',
                  mt: 2,
                  mb: 4,
                  textAlign: 'justify',
                }}
              >
                Welcome to our company. We are dedicated to providing the best services in the transportation industry. Our mission is to make your travel experience as smooth and enjoyable as possible. We value our customers and strive to meet their needs with excellence and professionalism.
              </Typography>
            </Box>

            <Box sx={{ mt: 4, position: 'relative', textAlign: 'center' }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: '28px',
                  color: '#727272',
                  fontFamily: 'Poppins',
                  fontWeight: 'bold',
                  mb: 2,
                }}
              >
                Our Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '20px',
                  color: '#727272',
                  fontFamily: 'Poppins',
                  textAlign: 'justify',
                  mx: 'auto',
                  maxWidth: '800px',
                }}
              >
                Our mission is to revolutionize the way you travel by providing top-notch services that are reliable, affordable, and convenient. We aim to be the leading provider in the transportation sector, continuously improving and innovating to meet the evolving needs of our customers.
              </Typography>
            </Box>

            <Box sx={{ mt: 4, position: 'relative', textAlign: 'center' }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: '28px',
                  color: '#727272',
                  fontFamily: 'Poppins',
                  fontWeight: 'bold',
                  mb: 2,
                }}
              >
                Our Team
              </Typography>
              <Box
                component="img"
               src={team}
                alt="Our Team"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '20px',
                  display: 'block',
                  mx: 'auto',
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontSize: '20px',
                  color: '#727272',
                  fontFamily: 'Poppins',
                  textAlign: 'justify',
                  mx: 'auto',
                  mt: 2,
                  maxWidth: '800px',
                }}
              >
                Our team is composed of dedicated professionals who are passionate about making your travel experience exceptional. With years of experience in the industry, we are committed to delivering high-quality services with a personal touch.
              </Typography>
            </Box>

            <Box sx={{ mt: 4, position: 'relative', textAlign: 'center' }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: '28px',
                  color: '#727272',
                  fontFamily: 'Poppins',
                  fontWeight: 'bold',
                  mb: 2,
                }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '20px',
                  color: '#727272',
                  fontFamily: 'Poppins',
                  textAlign: 'justify',
                  mx: 'auto',
                  maxWidth: '800px',
                }}
              >
                If you have any questions or need further information, please don't hesitate to contact us. You can reach us at info@example.com or call us at (123) 456-7890. We are here to assist you with any inquiries you may have.
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

export default AboutPage;
