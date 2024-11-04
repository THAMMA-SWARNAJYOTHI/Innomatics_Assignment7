// src/App.js

import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About'; // Assuming you have an About component
import Contact from './components/Contact'; // Assuming you have a Contact component
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services'; // Assuming you have a Services component

function App() {
  return (
    <Router>
      <Navbar /> {/* Include the Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
