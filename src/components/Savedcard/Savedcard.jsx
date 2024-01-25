import React from "react";
import './style.css';

function SavedCard(props) {
   
    
    return (
      <div className="saved-card p-5 rounded-3 m-5" style={{ width: '18rem' }}>
        <img src={props.book[0].image} className="card-img-top" style={{ width: '200px' }} alt="Book cover" />
        <div className="card-body">
          <h5 className="card-title m-3">{props.book[0].title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className="btn mt-2" style={{ background: '#75B9BE' }}>Remove from the saved books</button>
        </div>
      </div>
    );
}

export default SavedCard;