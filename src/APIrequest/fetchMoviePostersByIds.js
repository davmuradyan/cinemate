export const fetchMoviesByIds = async (ids) => {
    const apiKey = "7a435c87dca103b3ffb429b8c6318fba"
    try {
      const movies = await Promise.all(
        ids.map(async (id) => {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
          if (!response.ok) {
            throw new Error(`Failed to fetch movie with ID ${id}: ${response.statusText}`);
          }
          const movie = await response.json();
          return {
            id: movie.id,
            title: movie.title,
            posterUrl: movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : 'https://via.placeholder.com/150',
          };
        })
      );
      return movies;
    } catch (error) {
      console.error('Error fetching movies by IDs:', error);
      return [];
    }
  };
  