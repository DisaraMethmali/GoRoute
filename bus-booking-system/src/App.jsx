import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CssBaseline from '@mui/material/CssBaseline';

import createTheme from "@mui/material/styles/createTheme";
const theme = createTheme();

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
