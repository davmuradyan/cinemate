import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Intro/Navbar/Logo';

function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search submitted:', searchTerm); // Debug: Check if search term is submitted
    if (!searchTerm.trim()) {
      onSearch(''); // Clear results on empty search
      return;
    }
    onSearch(searchTerm.trim());
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="Navbar">
        <Logo goTo="/Dashboard"/>   
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
}

export default Navbar;
