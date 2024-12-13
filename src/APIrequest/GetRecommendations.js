// Function to send movie recommendations request to your Python API
export async function GetRecommendations(movieNamesWithYears) {
    try {
      const response = await fetch('http://127.0.0.1:5000/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          movies: movieNamesWithYears, // Send the movie names and years to the Python API
          n: 20, // Number of recommendations
        }),
      });
  
      console.log('Payload being sent to API:', {
        movies: movieNamesWithYears,
        n: 10,
      });      

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error('Failed to get recommendations:', response.status, response.statusText);
        return null;
      }
    } catch (error) {
      console.error('Error sending request to the API:', error);
      return null;
    }
  }