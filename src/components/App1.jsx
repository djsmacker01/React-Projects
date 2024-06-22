// App.jsx
import React, { useState } from "react";
import CreateCommunityModal from "./Community/CreateCommunityModal";
// import "./App.css"; // For styling

const App1 = () => {
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
          backgroundColor: "green",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          position: "absolute",
          bottom: "20px",
          left: "20px",
        }}>
        +
      </button>
      <CreateCommunityModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App1;
