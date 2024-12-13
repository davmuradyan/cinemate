import React, { useEffect, useState } from "react";
import "./Like.css";
import { addMovie } from './../APIrequest/AddFilm';

function Like({ id }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Check if the movie is already liked in localStorage
    const isLiked = localStorage.getItem(`liked-${id}`) === "true";
    setLiked(isLiked);
  }, [id]);

  const toggleLike = async () => {
    const newLikedState = !liked;  // Toggle the like state
    setLiked(newLikedState);  // Update local state

    // Update the like status in localStorage so it persists
    localStorage.setItem(`liked-${id}`, newLikedState);

    // Now, call the API to update the backend with the new like status
    try {
      await addMovie(id, newLikedState);  // Send the like status to the backend
    } catch (error) {
      console.error("Failed to update like status:", error);
      // Optional: You could handle an error here (e.g., show an error message)
    }
  };

  return (
    <div className="like-container">
      <button
        className={`like-btn ${liked ? "active" : ""}`}
        onClick={toggleLike}
      >
        {liked ? "Liked" : "Like"}
      </button>
    </div>
  );
}

export default Like;
