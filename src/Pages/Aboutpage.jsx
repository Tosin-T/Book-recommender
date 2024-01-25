import React from "react";
import About from "../components/About/About";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Aboutpage = () => {
    return (
        <div className='about-container container-fluid'>
        <h1>About Us:</h1>
        <div className=" container-fluid d-md-flex justify-content-center" style={{paddingLeft: '10rem'}}>
            <About />
        </div>
        
    </div>
    )
}

export default Aboutpage;