// AddFilm.js
export function addMovie(mvid, liked) {
    const url = `https://localhost:7009/AddMovie?mvid=${mvid}&liked=${liked}`;

    fetch(url, {
        method: 'GET', // HTTP method
        headers: {
            'Content-Type': 'application/json' // Optional, for API to recognize JSON if needed
        }
    })
    .then(response => response.json()) // Assuming the API returns JSON data
    .then(data => {
        console.log('Movie added successfully:', data); // Log the response data
    })
    .catch(error => {
        console.error('Error adding movie:', error); // Log any errors
    });
}