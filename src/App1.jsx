import React, { useState } from "react";
import CreateCommunity from "./components/CreateCommunity";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick} style={buttonStyles}>
        +
      </button>
      {showForm && <CreateCommunity />}
    </div>
  );
};

const buttonStyles = {
  fontSize: "24px",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: "#f90",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  position: "fixed",
  bottom: "20px",
  right: "20px",
};

export default App;
