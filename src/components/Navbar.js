// src/components/Navbar.js

import React from 'react';
import { Link } from "react-router-dom";
import img1 from "../image/log.png"; // Logo image
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <div className='mainheader'>
        <div className="logo">
          <img src={img1} alt="Logo" />
        </div>
        <div className='navi'>
          <nav className='btn'><Link to="/"> Home </Link></nav>
          <nav className='btn'><Link to="/about"> About </Link></nav>
          <nav className='btn'><Link to="/services"> Services </Link></nav>
          <nav className='btn'><Link to="/contact"> Contact </Link></nav>
        </div>
        <div className='help'>
          <button>Helpline</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
