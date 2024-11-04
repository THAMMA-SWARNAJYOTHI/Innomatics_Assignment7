// src/components/Book.js

import React from 'react';
import { Link } from "react-router-dom";
import './Services.css'; // Make sure to import the CSS

const Book = () => {
  return (
    <div className='service'>
      <div className='head'>
        <h1>Real Time Tracking Details</h1>
      </div>

      <div className='levels'>
        <div className='heart'>
          <iframe
            title='heart'
            src="https://thingspeak.com/channels/1813409/charts/2?bgcolor=%23d6f7f9&color=%23000000&days=1&dynamic=true&results=60&title=HEART+RATE&type=step&yaxismax=150&yaxismin=0"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className='oxygen'>
          <iframe
            title='oxygen'
            src="https://thingspeak.com/channels/1813409/charts/3?bgcolor=%23d6f7f9&color=%23000000&days=1&dynamic=true&results=30&title=SPO2&type=line&yaxismax=150&yaxismin=0"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <nav className='help'>
        <Link to="/">
          <button className='back'>Go Back</button>
        </Link>
      </nav>
    </div>
  );
}

export default Book;
