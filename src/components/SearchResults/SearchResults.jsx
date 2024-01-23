import React from "react";

function SearchResults() {
    return (
        <div>
            <h1>{book[0].title}</h1>
            <img src={book[0].image}></img>
        </div>
    )
}

export default SearchResults