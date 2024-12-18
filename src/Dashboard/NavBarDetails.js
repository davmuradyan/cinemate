import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Intro/Navbar/Logo';

function NavbarDetails() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); // Navigate to the home page
  };

  const handleLogoClick = () => {
    navigate('/Dashboard'); // Navigate to the Dashboard page
  };

  return (
    <div className="Navbar">
      {/* Wrap the Logo with a div or button and attach the onClick handler */}
      <div onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        <Logo />
      </div>
      <button className="go-back-button" onClick={handleGoBack}>
        Log Out
      </button>
    </div>
  );
}

export default NavbarDetails;