import React, { useState } from "react";
// import CreateCommunityPage from "./components/Community/CreateCommunityPage";

const App = () => {
  const [showCreateCommunityPage, setShowCreateCommunityPage] = useState(false);

  const handlePlusButtonClick = () => {
    setShowCreateCommunityPage(true);
  };

  return (
    <div className="app">
      <button onClick={handlePlusButtonClick}>+</button>
      {showCreateCommunityPage && <CreateCommunityPage/>}
    </div>
  );
};

export default App;
