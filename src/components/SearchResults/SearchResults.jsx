import React from "react";
import './style.css';

function SearchResults({ books }) {
    function onSave(book) {
    const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
    if (!savedBooks.find(b => b.id === book.id)) {
      savedBooks.push(books);
      localStorage.setItem('books', JSON.stringify(savedBooks));
    };
        console.log(savedBooks);
  };

    return (
        <div>
            {books.map((book, index) => (
                <div key={index}>
                    <div className="card">
                        <img className="card-img-top" src={book[0].image}></img>
                        <div className="card-body">
                            <h5 className="card-title">{book[0].title}</h5>
                            <button className="btn" onClick={() => onSave(book)}>Save</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SearchResults;