import React, { useEffect, useState } from 'react';
import './Posters.css';
import { GetLikedMovies } from '../APIrequest/GetLikedMovies';
import { getMovieNamesByIds } from '../APIrequest/GetMovieNamesByIds';
import { GetRecommendations } from '../APIrequest/GetRecommendations';
function RecommendedMovies() {
    const [message, setMessage] = useState("Personalized movies will appear here.");

    useEffect(() => {
        // Define an async function to fetch data
        const fetchMovies = async () => {
            const ids = await GetLikedMovies();

            const movieNamesWithYears = await getMovieNamesByIds(ids)

            const recommended = await GetRecommendations(movieNamesWithYears);

            console.log('Received Recommendations:', recommended);
        };

        fetchMovies(); // Call the async function
    }, []); // Empty dependency array ensures this runs once when the component mounts

    return (
        <div className="movies-for-you-section">
            <h1 className="section-title">Movies for You</h1>
            <p>{message}</p>
        </div>
    );
}

export default RecommendedMovies;