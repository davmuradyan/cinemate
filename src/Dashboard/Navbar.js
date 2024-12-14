import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Intro/Navbar/Logo';

function Navbar({ onSearch, withSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  let handleSearchSubmit;
  if (withSearch) {
    handleSearchSubmit = (event) => {
      event.preventDefault();
      console.log('Search submitted:', searchTerm); // Debug: Check if search term is submitted
      if (!searchTerm.trim()) {
        onSearch(''); // Clear results on empty search
        return;
      }
      onSearch(searchTerm.trim());
    };
  }
  

  let handleLogoClick;
  if (withSearch) {
    handleLogoClick = () => {
      setSearchTerm(''); // Clear the search bar
      onSearch(''); // Reset the search results
      navigate('/Dashboard'); // Navigate to the Dashboard or reload the same page
    };
  } else {
    navigate('/Dashboard');
  }

  const handleGoBack = () => {
    navigate('/'); // Navigate to the previous page
  };

  if (withSearch) {
    return (
      <div className="Navbar">
        <div onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <Logo />
        </div>
        <form className="search-bar" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
        <button className="go-back-button" onClick={handleGoBack}>
          Log Out
        </button>
      </div>
    );
  } else {
    return (
      <div className="Navbar">
        <div onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <Logo />
        </div>
        <button className="go-back-button" onClick={handleGoBack}>
          Log Out
        </button>
      </div>
  )}
  
}

export default Navbar;