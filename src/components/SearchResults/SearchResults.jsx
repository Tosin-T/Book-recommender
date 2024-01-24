import React from "react";
import './style.css';

function SearchResults({ books }) {

    function onSave(book) {
        const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
        
        const isThisSaved = savedBooks.some(savedBook => savedBook.id === book[0].id)


    if (!isThisSaved) {
      savedBooks.push(book[0]);
            localStorage.setItem('books', JSON.stringify(savedBooks));
            console.log(savedBook)
        }else {
            console.log("this book exists")
    }
  };

    return (
        <div>
            <div className="carousel slide h-100 d-flex align-items-center justify-content-center m-5" id="bookCarousel">
                <div className="carousel-inner" style={{ width: '400px'}}>
                    {books.map((book, index) =>( 
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} >
                            <img src={book[0].image} alt="book cover" />
                            <div className="carousel-caption d-none d-md-block" style={{ background: '#0008'}}>
                                <h5 style={{ fontSize: '0.9em'}}>{book[0].title}</h5>
                            </div>
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#bookCarousel" role="button" data-bs-slide="prev" style={{ background: '#75B9BE'}}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#bookCarousel" role="button" data-bs-slide="next" style={{ background: '#75B9BE'}}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default SearchResults;