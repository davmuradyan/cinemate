export const fetchPopularMovies = async (apiKey, page = 1) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const data = await response.json();
      return data.results.map(movie => ({
        id: movie.id,
        title: movie.title,
        posterUrl: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/150'
      }));
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      return [];
    }
  };
  