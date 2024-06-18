// App.jsx
import React, { useState } from "react";
import CreateCommunityModal from "./CreateCommunityModal";
import "./App.css"; // For styling

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <button
        onClick={handleOpenModal}
        style={{
          backgroundColor: "orange",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}>
        +
      </button>
      <CreateCommunityModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
