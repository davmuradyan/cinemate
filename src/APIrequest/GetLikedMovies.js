export async function GetLikedMovies() {
    try {
        const response = await fetch('https://localhost:7009/GetMovies');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Assuming API returns JSON

        // Ensure the response is valid and return the IDs
        if (Array.isArray(data) && data.length > 0) {
            return data; // Return the array of movie IDs directly
        } else {
            return []; // Return an empty array if no data or invalid format
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
        return []; // Return an empty array in case of an error
    }
}