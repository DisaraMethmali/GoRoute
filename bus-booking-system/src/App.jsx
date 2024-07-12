import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';

import CssBaseline from '@mui/material/CssBaseline';

import createTheme from "@mui/material/styles/createTheme";
import BookingPage from './pages/BookingPage';
import BusOwnerInterface from './pages/busOwner/BusOwnerInterface';
const theme = createTheme();

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/book" element={<BookingPage/>} />
        <Route exact path="/busOwner/*" element={<BusOwnerInterface/>} />
        <Route exact path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
