import React, { useEffect, useState } from 'react';
import './Posters.css';
import { GetLikedMovies } from '../APIrequest/GetLikedMovies';
import { getMovieNamesByIds } from '../APIrequest/GetMovieNamesByIds';
import { GetRecommendations } from '../APIrequest/GetRecommendations';
import { fetchTmdbIds } from '../APIrequest/fetchTmdbIds';
import { fetchMoviesByIds } from '../APIrequest/fetchMoviePostersByIds';

function RecommendedMovies({handlePosterClick}) {
    const [message, setMessage] = useState("Personalized movies will appear here.");
    const [posters, setPosters] = useState([])
    useEffect(() => {
        // Define an async function to fetch data
        const fetchMovies = async () => {
            const ids = await GetLikedMovies();
            const movieNamesWithYears = await getMovieNamesByIds(ids);
            const recommended = await GetRecommendations(movieNamesWithYears);
        
            // Ensure `recommended` is an array
            let moviesArray = [];
            if (Array.isArray(recommended)) {
                moviesArray = recommended;
            } else if (typeof recommended === "object" && recommended !== null) {
                moviesArray = Object.values(recommended); // Convert object to array
            } else {
                console.error("Unexpected response format:", recommended);
                return;
            }
            // Pass the formatted array to fetchTmdbIds
            const recids = await fetchTmdbIds(moviesArray[0]);
            const postersFromFunc = await fetchMoviesByIds(recids)
            setPosters(postersFromFunc)
        };              

        fetchMovies(); // Call the async function
    }, []); // Empty dependency array ensures this runs once when the component mounts
    console.log(posters)
    return (
        <div className="movies-for-you-section">
            <h1 className="section-title">Movies for You</h1>
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
        </div>
    );
}

export default RecommendedMovies;