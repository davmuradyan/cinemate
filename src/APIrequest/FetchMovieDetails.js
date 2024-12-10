export async function fetchMovieDetails(BASE_URL, id, API_KEY, setMovie) {
    try {
        const response = await fetch(`${BASE_URL}/${id}?api_key=${API_KEY}`);
        if (response.ok) {
            const data = await response.json();
            setMovie(data);
        } else {
            console.error('Error fetching movie details: ', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
}