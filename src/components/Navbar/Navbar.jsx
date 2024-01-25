import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    return (
        <div className="container-fluid" >
            <div className="row flex-nowrap" >
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-custom" >
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-5 text-black min-vh-100">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-5 me-md-auto text-black text-decoration-none" >
                            <span className="fs-1 d-none d-sm-inline">Menu</span>
                        </a>
                        <ul className="nav nav-pills fixed-leftq
                         flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item mb-5">
                                <div href="#" className="nav-link px-0" >
                                    <i className="bi-house" /> <Link className="ms-1 d-none d-sm-inline home" to="/">Home</Link>

                                </div>
                            </li>

                            <li className="nav-item mb-5">
                                <div href="#" className="nav-link px-0">
                                    <i className="bi-search" /> <Link className="ms-1 d-none d-sm-inline search" to="/search">Search</Link>
                                </div>
                            </li>
                            <li className="nav-item mb-5">
                                <div href="#" className="nav-link px-0">
                                    <i className="bi-heart" /> <Link className="ms-1 d-none d-sm-inline saved" to="/saved">Saved</Link>
                                </div>
                            </li>
                            <li className="nav-item mb-5">
                                <div href="#" className="nav-link px-0">
                                    <i className="bi-clock" /> <Link className="ms-1 d-none d-sm-inline timer" to="/timer" >Timer</Link>
                                </div>
                            </li>
                            <li className="nav-item mb-5">
                                <div href="#" className="nav-link px-0">
                                    <i className="bi-question" /> <Link className="ms-1 d-none d-sm-inline randomiser" to="/randomiser" >Random</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
