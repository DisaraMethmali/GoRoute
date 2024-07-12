import React from 'react';
import { Box, Container ,Typography,Rating } from '@mui/material';
import Header from '../components/Header';
import SearchBar from '../components/Search';
import img from '../assets/img.png';
import imgc from '../assets/imgc.png';
import propic from '../assets/propic.png';
import Footer from '../components/Footer';
const HomePage = () => {
  return (
    <>
     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
       
      <Box sx={{ bgcolor: '#fefefe', pt: 8 }}>
      <Container maxWidth="lg">
          <Box sx={{ mt: 4, textAlign: 'center', position: 'relative' }}>
            <Box
              component="img"
              src={img}
              alt="Descriptive Alt Text"
              sx={{
                left:'-1px',
                width: '1180px',
                height: '678px',
                borderRadius: '50px',
                display: 'block',
                mx: 'auto',
              }}
            />
            <SearchBar />
          </Box>
          <Box sx={{ mt: 4, position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
            <Box
              component="img"
              src={imgc}
              alt="Descriptive Alt Text"
              sx={{
                width: '500px',
                height: '400px',
                borderRadius: '50px',
                display: 'block',
                mx: 'auto',
                position: 'absolute',
                left: '50px',
                top: '0px',
              }}
            />
            <Typography
              variant="body1"
              sx={{
                position: 'absolute',
                top: '0',
                right: '0',
              fontSize:'32px',
                color: '#727272',
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                zIndex: 10, // Ensure text appears above the image
                padding: '8px',
                borderRadius: '8px',
              }}
            >
                 Explore Your Transport Media
            </Typography>
            <Typography
              variant="body1"
              sx={{
                position: 'absolute',
                top: '60px',
                right: '-20px',
              fontSize:'20px',
                color: '#727272',
                fontFamily: 'Poppins',
                zIndex: 10, // Ensure text appears above the image
                padding: '8px',
                maxWidth: '550px',
                textAlign: 'justify',
                
              }}
            >
                Lorem ipsum dolor sit amet consectetur.
                 Faucibus non aliquet felis egestas. Egestas arcu eu eros mauris faucibus condimentum ac in.
                 Lorem ipsum dolor sit amet consectetur.
                 Faucibus non aliquet felis egestas. Egestas arcu eu eros mauris faucibus condimentum ac in.
                 Lorem ipsum dolor sit amet consectetur.
                 Faucibus non aliquet felis egestas. 
            </Typography>
            <Typography
              variant="body1"
              sx={{
                position: 'absolute',
                top: '270px',
                right: '410px',
              fontSize:'22px',
                color: '#727272',
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                zIndex: 10, // Ensure text appears above the image
                padding: '8px',
                borderRadius: '8px',
              }}
            >
                See More 
            </Typography>
            <Box
              component="img"
              src={imgc}
              alt="Descriptive Alt Text"
              sx={{
                width: '500px',
                height: '400px',
                borderRadius: '50px',
                display: 'block',
                mx: 'auto',
                position: 'absolute',
                right: '0px',
                top: '400px',
              }}
            />
            <Typography
              variant="body1"
              sx={{
                position: 'absolute',
                top: '430px',
                left: '50px',
              fontSize:'32px',
                color: '#727272',
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                zIndex: 10, // Ensure text appears above the image
                padding: '8px',
                borderRadius: '8px',
              }}
            >
                 Live Tracking and Navigations
            </Typography>
            <Typography
              variant="body1"
              sx={{
                position: 'absolute',
                top: '500px',
                left: '50px',
              fontSize:'20px',
                color: '#727272',
                fontFamily: 'Poppins',
                zIndex: 10, // Ensure text appears above the image
                padding: '8px',
                maxWidth: '550px',
                textAlign: 'justify',
                
              }}
            >
                Lorem ipsum dolor sit amet consectetur.
                 Faucibus non aliquet felis egestas. Egestas arcu eu eros mauris faucibus condimentum ac in.
                 Lorem ipsum dolor sit amet consectetur.
                 Faucibus non aliquet felis egestas. Egestas arcu eu eros mauris faucibus condimentum ac in.
                 Lorem ipsum dolor sit amet consectetur.
                 Faucibus non aliquet felis egestas. 
            </Typography>
            <Typography
              variant="body1"
              sx={{
                position: 'absolute',
                top: '710px',
                left: '50px',
              fontSize:'22px',
                color: '#727272',
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                zIndex: 10, // Ensure text appears above the image
                padding: '8px',
                borderRadius: '8px',
              }}
            >
                See More 
            </Typography>
            <Box
              component="img"
              src={imgc}
              alt="Descriptive Alt Text"
              sx={{
                width: '500px',
                height: '400px',
                borderRadius: '50px',
                display: 'block',
                mx: 'auto',
                position: 'absolute',
                left: '50px',
                top: '820px',
              }}
            />
            <Typography
              variant="body1"
              sx={{
                position: 'absolute',
                top: '830px',
                right: '0',
              fontSize:'32px',
                color: '#727272',
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                zIndex: 10, // Ensure text appears above the image
                padding: '8px',
                borderRadius: '8px',
              }}
            >
                 Pay Your Tickets More Easily
            </Typography>
            <Typography
              variant="body1"
              sx={{
                position: 'absolute',
                top: '890px',
                right: '0px',
              fontSize:'20px',
                color: '#727272',
                fontFamily: 'Poppins',
                zIndex: 10, // Ensure text appears above the image
                padding: '8px',
                maxWidth: '550px',
                textAlign: 'justify',
                
              }}
            >
                Lorem ipsum dolor sit amet consectetur.
                 Faucibus non aliquet felis egestas. Egestas arcu eu eros mauris faucibus condimentum ac in.
                 Lorem ipsum dolor sit amet consectetur.
                 Faucibus non aliquet felis egestas. Egestas arcu eu eros mauris faucibus condimentum ac in.
                 Lorem ipsum dolor sit amet consectetur.
                 Faucibus non aliquet felis egestas. 
            </Typography>
            <Typography
              variant="body1"
              sx={{
                position: 'absolute',
                top: '1100px',
                right: '430px',
              fontSize:'22px',
                color: '#727272',
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                zIndex: 10, // Ensure text appears above the image
                padding: '8px',
                borderRadius: '8px',
              }}
            >
                See More 
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ position: 'absolute',
                top: '2050px',
                left: '130px',
              fontSize:'32px',
                color: '#727272',
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                zIndex: 10, // Ensure text appears above the image
                padding: '8px',
                borderRadius: '8px',}}>
               Feedbacks
              </Typography>
              <Box
              component="img"
              src={propic}
              alt="Profile Picture"
              sx={{
                top:'2100px',
                left: '310px',
                width: '178px',
                height: '178px',
                borderRadius: '50%',
                position: 'absolute',
                bottom: '-60px', // Positioning the profile picture below the box
                zIndex: 20, // Ensure the profile picture is above the box
              }}
            />
          
          <Box
              width={500}
              height={430}
              my={4}
              p={2}
              sx={{
                backgroundColor: '#D9D9D9',
                borderRadius: '50px',
                position: 'absolute',
                bottom: '0',
                top:'2150px',
                left: '150px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10, // Ensure the box is above other content
              }}
            >
               <Typography
              variant="body1"
              sx={{
                position: 'absolute',
                top: '90px',
                right: '20px',
              fontSize:'20px',
                color: '#727272',
                fontFamily: 'Poppins',
                zIndex: 10, // Ensure text appears above the image
                padding: '8px',
                maxWidth: '450px',
                textAlign: 'justify',
                
              }}
            >
                Lorem ipsum dolor sit amet consectetur.
                 Faucibus non aliquet felis egestas. Egestas arcu eu eros mauris faucibus condimentum ac in.
                 Lorem ipsum dolor sit amet consectetur.
                 Faucibus non aliquet felis egestas. Egestas arcu eu eros mauris faucibus condimentum ac in.
                
            </Typography>
            <Box sx={{ position: 'absolute', top: '350px', left: '180px' }}>
           
            <Rating name="read-only" value={5} readOnly />
          </Box>
            </Box>
            <Box
              component="img"
              src={propic}
              alt="Profile Picture"
              sx={{
                top:'2100px',
                right: '255px',
                width: '178px',
                height: '178px',
                borderRadius: '50%',
                position: 'absolute',
                bottom: '-60px', // Positioning the profile picture below the box
                zIndex: 20, // Ensure the profile picture is above the box
              }}
            />
          
          <Box
              width={500}
              height={430}
              my={4}
              p={2}
              sx={{
                backgroundColor: '#D9D9D9',
                borderRadius: '50px',
                position: 'absolute',
                bottom: '0',
                top:'2150px',
                right: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10, // Ensure the box is above other content
              }}
            > <Typography
            variant="body1"
            sx={{
              position: 'absolute',
              top: '90px',
             left: '20px',
            fontSize:'20px',
              color: '#727272',
              fontFamily: 'Poppins',
              zIndex: 10, // Ensure text appears above the image
              padding: '8px',
              maxWidth: '450px',
              textAlign: 'justify',
              
            }}
          >
              Lorem ipsum dolor sit amet consectetur.
               Faucibus non aliquet felis egestas. Egestas arcu eu eros mauris faucibus condimentum ac in.
               Lorem ipsum dolor sit amet consectetur.
               Faucibus non aliquet felis egestas. Egestas arcu eu eros mauris faucibus condimentum ac in.
              
          </Typography>
          <Box sx={{ position: 'absolute', top: '350px', left: '200px' }}>
           
           <Rating name="read-only" value={4} readOnly />
         </Box>

         
              </Box>
     
            
        </Container>
        <Box sx={{ mt: 4, position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
     
       </Box>
      </Box>
     
      
     
      </Box>
      <Box sx={{top:'1800px', mt: 4, position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
      <Footer/>
     </Box> 
    </>
  
     
  );
};

export default HomePage;
