// src/components/Header.js
import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [isJoined, setIsJoined] = useState(false);

  const handleJoinClick = () => {
    setIsJoined(!isJoined);
  };

  return (
    <div className="header">
      <div className="community-info">
        <div className="community-name">c/Philo</div>
        <div className="community-stats">
          <span>34 online</span>
          <span>100 total members</span>
        </div>
      </div>
      <div className="community-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </div>
      <button className="join-button" onClick={handleJoinClick}>
        {isJoined ? "Joined" : "Join"}
      </button>
    </div>
  );
}

export default Header;
