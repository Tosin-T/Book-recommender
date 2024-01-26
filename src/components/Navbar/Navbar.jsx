import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

// Navbar component responsible for rendering the navigation bar
function Navbar() {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto bg-custom">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-5 text-black min-vh-100 ">
                        {/* Logo linking to home */}
                        <Link to="/" className="d-flex align-items-center pb-3  me-md-auto text-black text-decoration-none">
                            <span className="fs-1 d-none d-sm-inline"><img src="src\assets\images\logo.png" className="logo-img" alt="Logo"></img></span>
                        </Link>
                         {/* Navigation links */}
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="logo">
                             {/* Home link */}
                            <li className="nav-item mb-3">
                                <Link to="/" className="nav-link px-0">
                                    <i className="bi bi-house-fill" /> <Link className="ms-1 d-none d-sm-inline homepage" to="*">Home</Link>
                                </Link>
                            </li>
                             {/* About link */}
                            <li className="nav-item mb-3">
                                <Link to="/aboutpage" className="nav-link px-0">
                                    <i className="bi bi-question-circle-fill" /> <Link className="ms-1 d-none d-sm-inline about" to="/aboutpage">About</Link>
                                </Link>
                            </li>
                             {/* Search link */}
                            <li className="nav-item mb-3">
                                <Link to="/search" className="nav-link px-0">
                                    <i className="bi bi-search-heart" /> <Link className="ms-1 d-none d-sm-inline search" to="/search">Search</Link>
                                </Link>
                            </li>
                            {/* Saved link */}
                            <li className="nav-item mb-3">
                                <Link to="/saved" className="nav-link px-0">
                                    <i className="bi bi-heart-fill" /> <Link className="ms-1 d-none d-sm-inline saved" to="/saved">Saved</Link>
                                </Link>
                            </li>
                             {/* Timer link */}
                            <li className="nav-item mb-3">
                                <Link to="/timer" className="nav-link px-0">
                                    <i className="bi bi-clock-fill" /> <Link className="ms-1 d-none d-sm-inline timer" to="/timer">Timer</Link>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

