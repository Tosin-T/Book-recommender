import React from "react";
import './style.css';
function About() {
    return (
        <>
            <div className="row1">
                <div className="about-card  p-5 rounded-3 m-5" style={{ width: '18rem' }}>
                    <img src="\src\assets\images\book-icon.png" className="icon" style={{ width: '4rem' }} alt="icon" />
                    <div className="card-body">
                        <h5 className="card-title m-3">1</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="about-card p-5  rounded-3 m-5" style={{ width: '18rem' }}>
                <a target="_blank" href="https://icons8.com/icon/12773/search">Search</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                    <img src="src\assets\images\bookmark-icon.png" className="icon" style={{ width: '4rem' }} alt="icon" />
                    <div className="card-body">
                        <h5 className="card-title m-3">2</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="row2">
                <div className="about-card  p-5 rounded-3 m-5" style={{ width: '18rem' }}>
                    <img src="src\assets\images\timer-icon.png" className="icon" style={{ width: '4rem' }} alt="icon" />
                    <div className="card-body">
                        <h5 className="card-title m-3">3</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="about-card p-5  rounded-3 m-5" style={{ width: '18rem' }}>
                    <img src="src\assets\images\search-icon.png" className="icon" style={{ width: '4rem' }} alt="icon" />
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