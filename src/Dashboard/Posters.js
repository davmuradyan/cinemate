import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Posters.css';

const API_KEY = '7a435c87dca103b3ffb429b8c6318fba';
const BASE_URL = `https://api.themoviedb.org/3/movie`;

const Posters = () => {
  const [posters, setPosters] = useState([]);
  const [currentStartId, setCurrentStartId] = useState(1);
  const postersPerLoad = 9;
  const navigate = useNavigate();

  const fetchMoviePostersByIdRange = async (startId, endId) => {
    const newPosters = [];
    for (let movieId = startId; movieId <= endId; movieId++) {
      try {
        const response = await fetch(`${BASE_URL}/${movieId}?api_key=${API_KEY}`);
        if (response.ok) {
          const movie = await response.json();
          if (movie.poster_path) {
            newPosters.push({
              id: movieId,
              title: movie.title || 'Unknown Title',
              posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            });
          }
        }
      } catch (error) {
        console.error(`Error fetching movie with ID ${movieId}:`, error);
      }
    }
    return newPosters;
  };

  const loadMorePosters = async () => {
    const startId = currentStartId;
    const endId = currentStartId + postersPerLoad;

    const newPosters = await fetchMoviePostersByIdRange(startId, endId);
    setPosters((prevPosters) => [...prevPosters, ...newPosters]);
    setCurrentStartId(endId + 1);
  };

  useEffect(() => {
    loadMorePosters();
  }, []);

  const handlePosterClick = (id) => {
    navigate(`/MovieDetail/${id}`);
  };

  return (
    <div className="posters-page">
      <h1 className="posters-title">Discover Movies</h1>
      <div className="poster-grid">
        {posters.map((poster) => (
          <div
            key={poster.id}
            className="poster-card"
            onClick={() => handlePosterClick(poster.id)}
          >
            <img src={poster.posterUrl} alt={poster.title} className="poster-image" />
            <p className="poster-title">{poster.title}</p>
          </div>
        ))}
      </div>
      <button onClick={loadMorePosters} className="load-more-button">
        Load More
      </button>
    </div>
  );
};

export default Posters;