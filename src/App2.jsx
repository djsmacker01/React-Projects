// src/App.js
import React, { useState } from "react";
import CreateCommunity from "./components/CreateCommunity";
import "./App.css";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="open-form-button" onClick={handleClickOpen}>
        +
      </button>
      {open && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleClose}>
              &times;
            </span>
            <CreateCommunity />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
