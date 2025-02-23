import React from 'react';
import Link from 'react-router-dom/Link';

function Navbar() {
  return (
    <nav style={{ 
      padding: '20px',
      backgroundColor: '#333',
      color: 'white'
    }}>
      <div className="container">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
