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
        <img src="src/assets/images/home-logo.png" alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default HomePage;
