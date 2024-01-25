import React from "react";
import SavedCard from "../components/Savedcard/Savedcard";
import { useState } from "react";
import { useEffect } from "react";


function Saved() {
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        // Retrieve saved books from local storage on component mount
        const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
        setSavedBooks(storedBooks);
    }, []);
    // const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
    // console.log(savedBooks)
    return (
        <div className='saved-books-conteiner container-fluid'>
            <h1>Your saved books</h1>
            <div className="conteiner-fluid d-md-flex justify-content-center">
             {savedBooks.map(book=> <SavedCard key={book.id} book = {book} />) }
        </div>
      
    </div>
  )
}

export default Saved;