import React from "react";
import axios from "axios";
import SearchResults from "../SearchResults/SearchResults";


//api call to show book recommendations
const searchBooks = (genre) => {
    
    const apikey = "13c48b7534974e2cb41485d0c4dfc9a5"
    const apiurl = "https://api.bigbookapi.com/search-books?api-key=" + apikey + "&query=" + genre;
    
    axios.get(apiurl)
        .then(response => {
           response.data.books.forEach(book => {
            // console.log(book[0].title + ' ' + book[0].image)
            <SearchResults />
           })
        })
}

//search for books depending on the button clicked
function Search() {
    const genres = ['action', 'adventure', 'anthropology', 'astronomy', 'archaeology', 'architecture', 'art', 'aviation', 'biography', 'biology', 'business', 'chemistry', 'children', 'classics', 'contemporary', 'cookbook', 'crafts', 'crime', 'dystopia', 'economics', 'education', 'engineering', 'environment', 'erotica', 'essay', 'fairy_tales', 'fantasy', 'fashion', 'feminism', 'fiction', 'finance', 'folklore', 'food', 'gaming', 'gardening', 'geography', 'geology', 'graphic_novel', 'health', 'historical', 'historical_fiction', 'history', 'horror', 'how_to', 'humor', 'inspirational', 'journalism', 'law', 'literary_fiction', 'literature', 'magical_realism', 'manga', 'martial_arts', 'mathematics', 'medicine', 'medieval', 'memoir', 'mystery', 'mythology', 'nature', 'nonfiction', 'novel', 'occult', 'paranormal', 'parenting', 'philosophy', 'physics', 'picture_book', 'poetry', 'politics', 'programming', 'psychology', 'reference', 'relationships', 'religion', 'romance', 'science_and_technology', 'science_fiction', 'self_help', 'short_stories', 'society', 'sociology', 'space', 'spirituality', 'sports', 'text_book', 'thriller', 'travel', 'true_crime', 'war', 'writing', 'young_adult'];

    //button name will be formatted with space and capital letters
    const formatGenre = (str) => {
        return str.replace(/_/g, ' ').replace(/\b(\w)/g, char => char.toUpperCase());
    }

    //for every genre in the array a button is created
    return (
        <div>
            <h1 className="text-right">What are you in the mood for?</h1>
            {genres.map((genre) => (
                <button className="btn btn-outline-dark m-1" id={genre} onClick={() => searchBooks(genre)} >
                {formatGenre(genre)}
                </button>
            ))}
        </div>
    )
}
 export default Search