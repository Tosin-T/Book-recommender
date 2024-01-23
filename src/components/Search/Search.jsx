import React from "react";
import axios from "axios";
// import apicall from "./API";

const searchBooks = (genre) => {
    // console.log(`searching for ${genre}`);

    const apikey = "f24169ebe84142998e6f4ebd20e10f31"
    const apiurl = "https://api.bigbookapi.com/search-books?api-key=" + apikey + "&query=" + genre;
    axios.get(apiurl)
        .then(response => {
           console.log(response.data.books[1][0].title + ' ' + response.data.books[1][0].image)
        })
}


function Search() {
    const genres = ['action', 'adventure', 'anthropology', 'astronomy', 'archaeology', 'architecture', 'art', 'aviation', 'biography', 'biology', 'business', 'chemistry', 'children', 'classics', 'contemporary', 'cookbook', 'crafts', 'crime', 'dystopia', 'economics', 'education', 'engineering', 'environment', 'erotica', 'essay', 'fairy_tales', 'fantasy', 'fashion', 'feminism', 'fiction', 'finance', 'folklore', 'food', 'gaming', 'gardening', 'geography', 'geology', 'graphic_novel', 'health', 'historical', 'historical_fiction', 'history', 'horror', 'how_to', 'humor', 'inspirational', 'journalism', 'law', 'literary_fiction', 'literature', 'magical_realism', 'manga', 'martial_arts', 'mathematics', 'medicine', 'medieval', 'memoir', 'mystery', 'mythology', 'nature', 'nonfiction', 'novel', 'occult', 'paranormal', 'parenting', 'philosophy', 'physics', 'picture_book', 'poetry', 'politics', 'programming', 'psychology', 'reference', 'relationships', 'religion', 'romance', 'science_and_technology', 'science_fiction', 'self_help', 'short_stories', 'society', 'sociology', 'space', 'spirituality', 'sports', 'text_book', 'thriller', 'travel', 'true_crime', 'war', 'writing', 'young_adult'];

    //button name will be formatted with space and capital letters
    const formatGenre = (str) => {
        return str.replace(/_/g, ' ').replace(/\b(\w)/g, char => char.toUpperCase());
    }

    //for every genre in the array a button is created
    return (
        <div>
            {genres.map((genre) => (
                <button key={genre} onClick={() => searchBooks(genre)} >
                {formatGenre(genre)}
                </button>
            ))}
        </div>
    )
}
 export default Search