export async function fetchUserRecommendations(API_URL, userId, setRecommendedMovies, setIsLoading) {
    try {
      setIsLoading(true); // Start loading
      const response = await fetch(`${API_URL}/recommendations?userId=${userId}`);
  
      if (response.ok) {
        const data = await response.json();
        if (data.length === 0) {
          setRecommendedMovies(-1); // No recommendations found
        } else {
          const movies = data.map((movie) => ({
            id: movie.id,
            title: movie.title || 'Unknown Title',
            posterUrl: movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : null,
          }));
          setRecommendedMovies(movies);
        }
      } else {
        setRecommendedMovies(-1);
      }
    } catch (error) {
      console.error('Error fetching user recommendations:', error);
      setRecommendedMovies(-1);
    } finally {
      setIsLoading(false);
    }
  }
  