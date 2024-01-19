import React from "react";
import { NavLink } from 'react-router-dom';
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
                                <NavLink
                                    to="/"
                                    
                                  
                                >
                                    Home
                                </NavLink>
                                <a href="#"className="nav-link px-0" >
                                    <i className="bi-house" /> <span className="ms-1 d-none d-sm-inline"> </span>

                                </a>
                            </li>
                             {/*
                            <li className="nav-item mb-5">
                                <a href="#" className="nav-link px-0">
                                    <i className="bi-search" /> <span className="ms-1 d-none d-sm-inline">Search</span>
                                </a>
                            </li>*/}
                            <li className="nav-item mb-5 d-sm-inline">
                                <i className="bi-heart" />
                                <NavLink
                                    to="saved"
                                    className={({ isActive }) =>
                                        isActive ? 'nav-link active' : 'nav-link'}>
                                    Saved
                                </NavLink>
                                
                            </li> {/*
                            <li className="nav-item mb-5">
                                <a href="#" className="nav-link px-0">
                                    <i className="bi-clock" /> <span className="ms-1 d-none d-sm-inline">Timer</span>
                                </a>
                            </li>
                            <li className="nav-item mb-5">
                                <a href="#" className="nav-link px-0">
                                    <i className="bi-question" /> <span className="ms-1 d-none d-sm-inline">Random</span>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;