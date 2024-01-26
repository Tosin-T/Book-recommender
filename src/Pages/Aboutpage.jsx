import React from "react";
import About from "../components/About/About";

const Aboutpage = () => {
    return (
        <div className='about-container '>
        <h2>Learn a bit about us!</h2>
        <div className=" container-fluid d-md-flex justify-content-center">
            <About />
        </div>
        
    </div>
    )
}

export default Aboutpage;