import React from "react";
import './style.css';
function About() {
    return (
        <>
            <div className="row1">
                <div className="about-card  p-5 rounded-3 m-5" style={{ width: '18rem' }}>
                    <img src="..." className="icon" style={{ width: '200px' }} alt="icon" />
                    <div className="card-body">
                        <h5 className="card-title m-3">1</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="about-card p-5  rounded-3 m-5" style={{ width: '18rem' }}>
                    <img src="..." className="icon" style={{ width: '200px' }} alt="icon" />
                    <div className="card-body">
                        <h5 className="card-title m-3">2</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="row2">
                <div className="about-card  p-5 rounded-3 m-5" style={{ width: '18rem' }}>
                    <img src="..." className="icon" style={{ width: '200px' }} alt="icon" />
                    <div className="card-body">
                        <h5 className="card-title m-3">3</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="about-card p-5  rounded-3 m-5" style={{ width: '18rem' }}>
                    <img src="..." className="icon" style={{ width: '200px' }} alt="icon" />
                    <div className="card-body">
                        <h5 className="card-title m-3">4</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </>

    );
}
export default About;