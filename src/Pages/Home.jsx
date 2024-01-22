import React from "react";
import About from "../components/About/About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1 className="webpages"> This is the homepage </h1>
            <Routes>
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}

export default Home;