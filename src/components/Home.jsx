// Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleCreateCommunityClick = () => {
    navigate("/create-community");
  };

  return (
    <div>
      <button
        onClick={handleCreateCommunityClick}
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
    </div>
  );
};

export default Home;
