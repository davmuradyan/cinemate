export async function getMovieNamesByIds(movieIds) {
  const movies = [];
  const API_KEY = '7a435c87dca103b3ffb429b8c6318fba';
  const BASE_URL = `https://api.themoviedb.org/3/movie`;
  
  for (const movieId of movieIds) {
    try {
      const response = await fetch(`${BASE_URL}/${movieId}?api_key=${API_KEY}`);
      if (response.ok) {
        const movie = await response.json();
        const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : 'Unknown Year';
        movies.push({
          name: movie.title || 'Unknown Title',
          year: releaseYear
        });
      } else {
        console.error(`Failed to fetch movie with ID: ${movieId}`);
        movies.push({
          name: 'Unknown Title',
          year: 'Unknown Year'
        });
      }
    } catch (error) {
      console.error(`Error fetching movie with ID ${movieId}:`, error);
      movies.push({
        name: 'Unknown Title',
        year: 'Unknown Year'
      });
    }
  }
  return movies;
};