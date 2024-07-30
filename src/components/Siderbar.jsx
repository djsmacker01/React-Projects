// src/components/Sidebar.js
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="topics">
        <h3>Topics</h3>
        <div className="topic">Philosophy</div>
        <div className="topic">Ethics</div>
        <div className="topic">Mind</div>
        <div className="topic">Reading</div>
      </div>
      <div className="rules">
        <h3>About Community</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
