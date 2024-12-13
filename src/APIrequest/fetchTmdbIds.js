export async function fetchTmdbIds(movies) {
    const apiKey = "7a435c87dca103b3ffb429b8c6318fba";
    const baseUrl = "https://api.themoviedb.org/3/search/movie";
    const movieIds = await Promise.all(
        movies.map(async (movie) => {
            const query = encodeURIComponent(movie.title);
            const url = `${baseUrl}?api_key=${apiKey}&query=${query}&year=${movie.year}`;
            
            
            try {
                const response = await fetch(url);
                const data = await response.json();
                
                if (data.results && data.results.length > 0) {
                    const tmdbMovie = data.results[0];
                    return tmdbMovie.id; // Return only the TMDb ID
                } else {
                    console.warn(`No match found for ${movie.title} (${movie.year})`);
                    return null; // Return null if no match is found
                }
            } catch (error) {
                console.error(`Error fetching TMDb ID for ${movie.title}:`, error);
                return null; // Return null in case of an error
            }
        })
    );

    return movieIds.filter((id) => id !== null); // Filter out null IDs
}