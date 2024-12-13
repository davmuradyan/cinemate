import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Posters.css';
import Navbar from './Navbar';
import { fetchPopularMovies } from '../APIrequest/fetchPopularMovies';
import { fetchMoviesByName } from '../APIrequest/fetchMoviesByName'; // Ensure correct import
import PopularMovies from './PopularMovies';
import RecommendedMovies from './RecommendedMovies'

const API_KEY = '7a435c87dca103b3ffb429b8c6318fba';

const Posters = () => {
  const [posters, setPosters] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const loadPopularMovies = async (page = 1) => {
    setIsSearching(true);
    try {
      const newPosters = await fetchPopularMovies(API_KEY, page);
      if (newPosters.length > 0) {
        setPosters(newPosters);
      }
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearch = async (name) => {
    if (!name) {
      loadPopularMovies();
      return;
    }

    setIsSearching(true);
    try {
      // Call the fetchMoviesByName function to get search results
      await fetchMoviesByName(API_KEY, name, setPosters, setIsSearching);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  const loadMorePosters = async () => {
    setIsSearching(true);
    try {
      const newPage = currentPage + 1;
      const newPosters = await fetchPopularMovies(API_KEY, newPage);
      if (newPosters.length > 0) {
        setPosters((prevPosters) => [...prevPosters, ...newPosters]);
        setCurrentPage(newPage);
      }
    } catch (error) {
      console.error('Error fetching more popular movies:', error);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    loadPopularMovies();
  }, []);

  const handlePosterClick = (id) => {
    navigate(`/MovieDetail/${id}`);
  };

  return (
    <div className="posters-page">
      <Navbar onSearch={handleSearch} />
      <PopularMovies posters={posters} handlePosterClick={handlePosterClick} loadMorePosters={loadMorePosters} isSearching={isSearching} />
      <RecommendedMovies handlePosterClick={handlePosterClick} />
    </div>
  );
};

export default Posters;