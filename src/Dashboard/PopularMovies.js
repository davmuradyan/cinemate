import './Posters.css'

function PopularMovies({posters, handlePosterClick, loadMorePosters, isSearching}) {
    return (
        <div className="popular-movies-section">
        <h1 className="section-title">Popular Movies</h1>
        <div className="poster-grid">
          {posters.map((poster) => (
            <div
            key={poster.id}
            className="poster-card"
            onClick={(e) => {
              e.preventDefault(); // Prevent default behavior
              handlePosterClick(poster.id);
            }}
          >
          
              <img src={poster.posterUrl} alt={poster.title} className="poster-image" />
              <p className="poster-title">{poster.title}</p>
            </div>
          ))}
        </div>
        {posters.length === 0 && !isSearching && (
          <p className="no-results">No popular movies found</p>
        )}
        <div className="load-more-container">
          <button
            onClick={loadMorePosters}
            className="load-more-button"
            disabled={isSearching}
          >
            {isSearching ? 'Loading...' : 'Load More'}
          </button>
        </div>
      </div>
    )
  }

export default PopularMovies