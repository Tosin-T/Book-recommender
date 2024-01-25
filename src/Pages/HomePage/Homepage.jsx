import React, { useState, useEffect } from "react";
import "./style.css";

const HomePage = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setShowLogo(true);
  }, []);

  return (
    <div className="homepage">
      <div className={`logo-container ${showLogo ? "slide-in" : ""}`}>
        <img src="src\assets\images\logo.png" alt="Logo" className="logo" />
      </div>
      <div className="description">
        <h1>Welcome to Book Finder</h1>
        <p>Find your next favorite book with ease!</p>
      </div>
    </div>
  );
};

export default HomePage;
