import React from "react";

// Component representing individual feature cards
const Cards = ({ icon, title, description }) => {
    return (
        <div className="about-card p-5 rounded-3 m-5" style={{ width: '20rem ' }}>
            <i className={` ${icon} `} style={{ fontSize: '35px', color: '#75B9BE' }}></i>
            <div className="card-body vw">
                
                <h5 className="card-title m-3">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default Cards;
