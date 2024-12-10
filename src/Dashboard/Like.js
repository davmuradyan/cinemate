import { useState } from "react";
import { addMovie } from './../APIrequest/AddFilm'; 
import { use } from "react";

function Like({id}) {
    
    const [like, setLike] = useState(false); // Add const for proper destructuring

    const addLike = () => {
        setLike(true)
        addMovie(id, like)
    }

    const addDis = () => {
        setLike(false)
        addMovie(id, like)
    }

    return (
        <div className="Like">
            <button className="LikeBtn" onClick={addLike}>
                Like</button> {/* Use an arrow function */}
            <button className="DislikeBtn" onClick={addDis}>Dislike</button>
        </div>
    );
}

export default Like;