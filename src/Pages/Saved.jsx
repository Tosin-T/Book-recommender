import React from "react";
import './style.css';
function SavedCard(props) {
    return (
      <div className="saved-card p-5 rounded-3 m-5">
        <img src={props.book.image} className="card-img-top" style={{ width: '200px' }} alt="Book cover" />
        <div className="card-body">
          <h5 className="card-title m-3">{props.book.title}</h5>
          <p className="card-text"></p>
          <button className="btn mt-2" style={{ background: '#75B9BE' }}>Remove from the saved books</button>
        </div>
      </div>
    );
}
export default SavedCard;