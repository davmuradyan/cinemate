import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetail.css';
import Like from './Like';
import { fetchMovieDetails } from '../APIrequest/FetchMovieDetails';

const API_KEY = '7a435c87dca103b3ffb429b8c6318fba';
const BASE_URL = `https://api.themoviedb.org/3/movie`;

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [ liked, setLiked] = useState(false);

  useEffect(() => {
    fetchMovieDetails(BASE_URL, id, API_KEY, setMovie);
  }, [id]);

  if (!movie) {
    return <div className="movie-detail">Loading...</div>;
  }

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
          <div>
            <Like id={id}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
