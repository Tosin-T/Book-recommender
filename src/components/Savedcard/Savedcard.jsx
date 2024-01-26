import React from "react";
import './style.css';

function SavedCard(props) {
  // This function updates saved books when user click the button 'Remove'
  function deleteBook() {
    const savedBooks = JSON.parse(localStorage.getItem('books'));
    const updatedBooks = savedBooks.filter(savedBook => savedBook.id !== props.book.id);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    window.location.reload(true);
  }

  return (
    <div className="saved-card p-3 rounded-3 m-3 d-flex">
      <img src={props.book.image} className="card-img-top imag-fluid h-auto" style={{ width: '200px' }} alt="Book cover" />
      <div className="card-body align-middle">
        <h5 className="card-title ms-3 h-50">{props.book.title}</h5>
        <p className="card-text"></p>
        <button className="btn mt-5 ms-3" style={{ background: '#75B9BE' }} onClick={deleteBook}>Remove</button>
      </div>
      
    </div>
  );
}

export default SavedCard;