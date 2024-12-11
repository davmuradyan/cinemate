export async function fetchMoviesByName(API_KEY, name, setPosters, setIsSearching) {
    try {
      setIsSearching(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(name)}`
      );
      if (response.ok) {
        const data = await response.json();
        const movies = data.results.map((movie) => ({
          id: movie.id,
          title: movie.title || 'Unknown Title',
          posterUrl: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : 'https://via.placeholder.com/150', // Ensure a placeholder if poster path is missing
        }));
        setPosters(movies);
      } else {
        setPosters([]);
      }
    } catch (error) {
      console.error('Error fetching movies by name:', error);
      setPosters([]);
    } finally {
      setIsSearching(false);
    }
  }
  