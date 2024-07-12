import React from 'react'
import BookingForm from '../components/BookingForm'
import Header from '../components/Header'
import AvailableBus from '../components/AvailableBus'
import LiveBusTracker from '../components/LiveBusTracker';
import Footer from '../components/Footer';

function BookingPage() {
  const busId = null;
  return (
    <>
      <Header />
    <div>
        <BookingForm></BookingForm>
        <AvailableBus/>
        

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , backgroundColor: '#00000041'}}>
        {busId ? ( <LiveBusTracker busId={busId} /> ) : <h4>Select a Bus</h4>}
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default BookingPage