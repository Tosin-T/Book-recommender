import React from "react";
import './style.css';
function SavedCard(props) {
  return (
      
        <div className="saved-card conteiner-fluid align-items-center p-4 rounded-3 m-3 col-md-6 col-12">
          <img src={props.book.image} className="card-img-top img-fluid" style={{ width: '180px' }} alt="Book cover" />
          <div className="card-body">
            <h5 className="card-title m-3 h-50">{props.book.title}</h5>
            <p className="card-text"></p>
            <button className="btn mt-2" style={{ background: '#75B9BE' }}>Remove</button>
          </div>
        </div>
      
    );
}
export default SavedCard;