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
  
  return (
    <div className='saved-books-conteiner container-fluid w-100 h-100'>
      <h1 className="text-center ps-2 mb-4">Your saved books</h1>
      <div className="conteiner-fluid me-5 me-md-0 d-md-flex w-100 text-center">
       {savedBooks.map(book=> <SavedCard key={book.id} book = {book} />) }
      </div>
  </div>
 )
}
export default Saved;