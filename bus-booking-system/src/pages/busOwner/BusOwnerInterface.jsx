import React from 'react'
import HomeBusOwner from './HomeBusOwner'
import HeaderBusOwner from '../../components/busOwner/HeaderBusOwner'
import { Route, Routes } from 'react-router-dom'
import AddRoute from './AddRoute'
import './busOwner.css'

function BusOwnerInterface() {
  return (
    <>
    <HeaderBusOwner></HeaderBusOwner>
    <div className="busOwner-contents">
        <Routes>
            <Route exact path="/" element={<HomeBusOwner/>} />
            <Route exact path="/addRoute" element={<AddRoute/>} />
            {/* <Route exact path="/busOwner/*" element={<BusOwnerInterface/>} /> */}
        </Routes>
    </div>
    </>
  )
}

export default BusOwnerInterface