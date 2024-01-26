import React, { useState, useRef } from "react";
import axios from "axios";
import SearchResults from "../SearchResults/SearchResults";
import { Dropdown } from 'react-bootstrap';


//search for books depending on the button clicked
function Search() {
    const [books, setBooks] = useState([]);
    const resultsRef = useRef(null);

    const searchBooks = (genre) => {
    
        //api call to get book recommendations
        const apikey = "13c48b7534974e2cb41485d0c4dfc9a5"
        const apiurl = "https://api.bigbookapi.com/search-books?api-key=" + apikey + "&query=" + genre;
        
        axios.get(apiurl)
            .then(response => {
                setBooks(response.data.books);
                // Scroll to results after state update
                    resultsRef.current.scrollIntoView({ behavior: 'smooth' });
            })
            
    }
    const genres = ['action', 'adventure', 'anthropology', 'astronomy', 'archaeology', 'architecture', 'art', 'aviation', 'biography', 'biology', 'business', 'chemistry', 'children', 'classics', 'contemporary', 'cookbook', 'crafts', 'crime', 'dystopia', 'economics', 'education', 'engineering', 'environment', 'erotica', 'essay', 'fairy_tales', 'fantasy', 'fashion', 'feminism', 'fiction', 'finance', 'folklore', 'food', 'gaming', 'gardening', 'geography', 'geology', 'graphic_novel', 'health', 'historical', 'historical_fiction', 'history', 'horror', 'how_to', 'humor', 'inspirational', 'journalism', 'law', 'literary_fiction', 'literature', 'magical_realism', 'manga', 'martial_arts', 'mathematics', 'medicine', 'medieval', 'memoir', 'mystery', 'mythology', 'nature', 'nonfiction', 'novel', 'occult', 'paranormal', 'parenting', 'philosophy', 'physics', 'picture_book', 'poetry', 'politics', 'programming', 'psychology', 'reference', 'relationships', 'religion', 'romance', 'science_and_technology', 'science_fiction', 'self_help', 'short_stories', 'society', 'sociology', 'space', 'spirituality', 'sports', 'text_book', 'thriller', 'travel', 'true_crime', 'war', 'writing', 'young_adult'];
    const [selectedGenre, setSelectedGenre] = useState(""); //state for selected genre

    //button name will be formatted with space and capital letters
    const formatGenre = (str) => {
        return str.replace(/_/g, ' ').replace(/\b(\w)/g, char => char.toUpperCase());
    }

    //for every genre in the array a button is created
    return (
        <div>
            <p className="h1" style={{ textAlign: 'center'}}>What are you in the mood for?</p>
            <div className="container-fluid m-5">
                {/* Buttons for large screens */}
                <div className="row d-none d-md-flex flex-wrap">
                    {genres.map((genre) => (
                        <button className="btn btn-outline-dark m-1 col" style={{ whiteSpace: 'nowrap'}} key={genre}    onClick={() => searchBooks(genre)} >
                            {formatGenre(genre)}
                        </button>
                    ))}
                </div>

                {/* Dropdown for small screens */}
                <div className="d-md-none">
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-dark" id="genre-dropdown">
                            {selectedGenre || "Choose a Genre"}
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ maxHeight: '200px', overflowY: 'auto' }}>
                            {genres.map(genre => (
                                <Dropdown.Item
                                    key={genre}
                                    onClick={() => {
                                        setSelectedGenre(formatGenre(genre));
                                        searchBooks(genre);
                                    }}
                                >
                                    {formatGenre(genre)}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            
            {/* <div className="container-fluid m-5">
                <div className="row">
                    {genres.map((genre) => (
                        <button className="btn btn-outline-dark m-1 col" style={{ whiteSpace: 'nowrap'}} key={genre} onClick={() => searchBooks(genre)} >
                        {formatGenre(genre)}
                        </button>
                    ))}
                </div>
            </div> */}
            <SearchResults resultsRef={resultsRef} books={books} /> {/* Pass the books state as a prop to SearchResults */}
        </div>
    )
}
export default Search;