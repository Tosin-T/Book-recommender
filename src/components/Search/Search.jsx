import React from "react";

function Search() {
    const genres = ['action', 'food', 'paranormal']
    return (
        <div>
            {genres.map((genre) => (
                <button key={genre}>
                {genre}
                </button>
            ))}
        </div>
    )
}
 export default Search