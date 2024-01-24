import React from "react";
import './style.css';

function Wrapper({children}) {
    return (
        <div className="wrapper container-fluid d-flex">
            {children}
        </div>)
    
}

export default Wrapper;