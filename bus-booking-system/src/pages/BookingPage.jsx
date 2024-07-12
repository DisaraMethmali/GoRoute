import React from 'react'
import BookingForm from '../components/BookingForm'
import Header from '../components/Header'
import AvailableBus from '../components/AvailableBus'
import LiveBusTracker from '../components/LiveBusTracker';

function BookingPage() {
  const busId = 'example-bus-id';
  return (
    <>
      <Header />
    <div>
        <BookingForm></BookingForm>
        <AvailableBus/>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LiveBusTracker busId={busId} />
        </div>
    </div>
    </>
  )
}

export default BookingPage