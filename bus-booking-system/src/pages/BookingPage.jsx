import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookingForm from '../components/BookingForm';
import Header from '../components/Header';
import AvailableBus from '../components/AvailableBus';
import LiveBusTracker from '../components/LiveBusTracker';
import Footer from '../components/Footer';

function BookingPage() {
  const [availableBuses, setAvailableBuses] = useState([]);
  const [busId, setBusId] = useState(null);
  const MapbusId = 'example-bus-id'

  useEffect(() => {
    // Fetch all bus routes on initial load
    const fetchBusRoutes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/routes');
        setAvailableBuses(response.data);
      } catch (error) {
        console.error('Error fetching bus routes:', error);
      }
    };
    fetchBusRoutes();
  }, []);

  const handleSearch = async (searchParams) => {
    console.log(searchParams)
    try {
      const response = await axios.post('http://localhost:5000/api/routes/search', searchParams);
      console.log(response.data)
      setAvailableBuses(response.data);
    } catch (error) {
      console.error('Error fetching buses:', error);
    }
  };

  return (
    <>
      <Header />
      <div>
        <BookingForm onSearch={handleSearch} /> 
        {availableBuses.map((bus) => (
          <AvailableBus key={bus._id} bus={bus} />
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          {MapbusId ? (<LiveBusTracker busId={MapbusId} />) : <h4>Select a Bus</h4>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookingPage;
