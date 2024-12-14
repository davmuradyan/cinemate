import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";
import Like from "./Like";
import { fetchMovieDetails } from "../APIrequest/FetchMovieDetails";
import Navbar from "./Navbar"

const API_KEY = "7a435c87dca103b3ffb429b8c6318fba";
const BASE_URL = `https://api.themoviedb.org/3/movie`;

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(BASE_URL, id, API_KEY, setMovie);
  }, [id]);

  if (!movie) {
    return <div className="movie-detail">Loading...</div>;
  }

  const rating = movie.vote_average / 2; // Maximum rating is 5 stars (out of 10)

  // Helper function to render stars with half-star logic
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push("full");
      } else if (rating >= i - 0.5) {
        stars.push("half");
      } else {
        stars.push("empty");
      }
    }
    return stars;
  };

  const stars = renderStars(rating);

  return (
    <div className="movie-detail">
      <Navbar onSearch={0} withSearch={false} />
      <div className="movie-detail-content">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-detail-poster"
        />
        <div className="movie-detail-description">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>

          {/* Movie rating */}
          <div className="movie-rating">
            <strong>Rating:</strong>
            <div className="stars-container">
              {stars.map((star, index) => (
                <span key={index} className={`star ${star}`}>★</span>
              ))}
            </div>
            <span className="numeric-rating">({movie.vote_average}/10)</span>
          </div>

          {/* Like button */}
          <div className="movie-actions">
            <Like id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
