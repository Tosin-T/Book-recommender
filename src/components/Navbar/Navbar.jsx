import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto bg-custom">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-5 text-black min-vh-100">
                        <Link to="/" className="d-flex align-items-center pb-3  me-md-auto text-black text-decoration-none">
                            <span className="fs-1 d-none d-sm-inline"><img src="src\assets\images\Stack of Books Author Writer Logo (1).png" className="logo-img" alt="Logo"></img></span>
                        </Link>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item mb-3">
                                <Link to="/" className="nav-link px-0">
                                    <i className="bi bi-house-fill" /> <Link className="ms-1 d-none d-sm-inline home" to="/">Home</Link>
                                </Link>
                            </li>

                            <li className="nav-item mb-3">
                                <Link to="/search" className="nav-link px-0">
                                    <i className="bi bi-search-heart" /> <Link className="ms-1 d-none d-sm-inline search" to="/search">Search</Link>
                                </Link>
                            </li>
                            <li className="nav-item mb-3">
                                <Link to="/saved" className="nav-link px-0">
                                    <i className="bi bi-heart-fill" /> <Link className="ms-1 d-none d-sm-inline saved" to="/saved">Saved</Link>
                                </Link>
                                
                            </li>
                            <li className="nav-item mb-3">
                                <Link to="/timer" className="nav-link px-0">
                                    <i className="bi bi-clock-fill" /> <Link className="ms-1 d-none d-sm-inline timer" to="/timer">Timer</Link>
                                </Link>
                            </li>
                            {/* <li className="nav-item mb-3">
                                <Link to="/randomiser" className="nav-link px-0">
                                    <i className="bi bi-question-circle-fill" /> <Link className="ms-1 d-none d-sm-inline randomiser" to="/randomiser">Random</Link>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

