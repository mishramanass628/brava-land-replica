// HorizontalScroll.js
import React from 'react';
import './Roller.css';

const Roller = ({ children }) => {
  return (
    <div className="horizontal-scroll-container">
      <div className="horizontal-scroll-content">
        {children}
      </div>
    </div>
  );
};

export default Roller;
