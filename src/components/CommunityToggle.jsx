import React, { useState } from "react";
import CreateCommunity from "./CreateCommunity";

const CommunityToggle = () => {
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
          position: "absolute",
          bottom: "20px",
          left: "20px",
          backgroundColor: "#06D001",
          color: "white",
          padding: "15px 20px",
          borderRadius: "50%",
          fontSize: "1.5rem",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        }}>
        +
      </button>
      <CreateCommunity isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default CommunityToggle;
