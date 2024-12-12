export async function fetchMoviePostersByIdRange(API_KEY, BASE_URL, startId, endId) {
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
  }