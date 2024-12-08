import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetail.css';

const API_KEY = '7a435c87dca103b3ffb429b8c6318fba';
const BASE_URL = `https://api.themoviedb.org/3/movie`;

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${id}?api_key=${API_KEY}`);
        if (response.ok) {
          const data = await response.json();
          setMovie(data);
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div className="movie-detail">Loading...</div>;
  }

  const getStarRating = (rating) => {
    const fullStars = Math.floor(rating / 2);
    const emptyStars = 5 - fullStars;

    return (
      <div className="movie-detail-rating">
        {[...Array(fullStars)].map((_, index) => (
          <span key={`full-${index}`} className="star">★</span>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={`empty-${index}`} className="star empty">☆</span>
        ))}
        <span className="rating-number" style={{ display: 'none' }}>
          {`${Math.round(movie.vote_average * 10) / 10}/10`}
        </span>
      </div>
    );
  };

  const handleMouseEnter = () => {
    const ratingNumber = document.querySelector('.rating-number');
    if (ratingNumber) {
      ratingNumber.style.display = 'inline';
    }
  };

  const handleMouseLeave = () => {
    const ratingNumber = document.querySelector('.rating-number');
    if (ratingNumber) {
      ratingNumber.style.display = 'none';
    }
  };

  return (
    <div className="movie-detail">
      <div className="movie-detail-content">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-detail-poster"
        />
        <div className="movie-detail-description">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <div
            className="movie-detail-rating"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {getStarRating(movie.vote_average)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
