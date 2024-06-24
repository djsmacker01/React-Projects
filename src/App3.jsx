import React, { useState } from "react";
// import CreateCommunityPage from "./components/Community/CreateCommunityPage";
import CreateCommunityPage from "./components/CreateCommunityPage";
import CommunityPage1 from "./components/CommunityPage1";

const mockCommunity = {
  title: "Toxicology",
  posts: [
    { title: "Post 1", content: "This is a comment." },
    { title: "Post 2", content: "Another comment here." },
  ],
};

const App = () => {
  const [showCreateCommunityPage, setShowCreateCommunityPage] = useState(false);
  const [showCommunityPage, setShowCommunityPage] = useState(true); // Change to true for demo

  const handlePlusButtonClick = () => {
      setShowCreateCommunityPage(true);
        setShowCommunityPage(false);
  };

  return (
    <div className="app">
      <button onClick={handlePlusButtonClick}>+</button>
      {showCreateCommunityPage && <CreateCommunityPage />}
      {showCommunityPage && <CommunityPage1 community={mockCommunity} />}
    </div>
  );
};

export default App;
