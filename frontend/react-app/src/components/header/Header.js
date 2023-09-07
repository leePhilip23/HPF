import React from 'react';
import './Header.css'; // Import your CSS file
import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from '../../icons/gm-general-motors-new-20212235.jpg';
import gears from '../../icons/icons8-automation-100.png';

export default function Header() {
  return (
    <div className="header" >
      <div className="nav-buttons">
        <button>Home</button>
        <button>Brands</button>
        <button>Career</button> 
      </div>
      <div className="gm-logo-container">
        <img src={logo} class="gm-logo" />
      </div>
      <Link to="/chatbot" class="button" className="chatbot-button">
        <img src={gears} alt="icons" className="gears"></img>
      </Link>
    </div>
  );
}

