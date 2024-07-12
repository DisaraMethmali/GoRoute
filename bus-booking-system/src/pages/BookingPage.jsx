import React from 'react'
import BookingForm from '../components/BookingForm'
import Header from '../components/Header'
import AvailableBus from '../components/AvailableBus'

function BookingPage() {
  return (
    <>
      <Header />
    <div>
        <BookingForm></BookingForm>
        <AvailableBus/>
    </div>
    </>
  )
}

export default BookingPage