import React from "react";
import axios from "axios";
// import apicall from "./API";

const searchBooks = (genre) => {
    // console.log(`Searching for ${genre}`);

    const apikey = "f24169ebe84142998e6f4ebd20e10f31"
    const apiurl = "https://api.bigbookapi.com/search-books?api-key=" + apikey + "&query=" + genre;
    axios.get(apiurl)
        .then(response => {
            console.log(response.data.books)
        })
}


function Search() {
    const genres = ['action', 'food', 'paranormal']
    return (
        <div>
            {genres.map((genre) => (
                <button key={genre} onClick={() => searchBooks(genre)} >
                {genre}
                </button>
            ))}
        </div>
    )
}
 export default Search