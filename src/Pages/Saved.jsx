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
    <div className='saved-books-conteiner container-fluid w-100 me-5 me-md-0'>
      <h1 className="justify-content-center text-center">Your saved books</h1>
      <div className="conteiner-fluid me-5 me-md-0 d-md-flex w-100">
       {savedBooks.map(book=> <SavedCard key={book.id} book = {book} />) }
      </div>
  </div>
 )
}
export default Saved;