// import React, { useState } from "react";
// import { CommunityProvider, useCommunity } from "./CommunityContext";
// import CreateCommunityPage from "./components/CreateCommunityPage";
// import CommunityPage from "./components/Community/CommunityPage";
// // import CommunityPage1 from "./components/CommunityPage1";



// const AppContent = () => {
//   const [showCreateCommunityPage, setShowCreateCommunityPage] = useState(false);
//     //   const [showCommunityPage, setShowCommunityPage] = useState(true); // Change to true for demo
//       const [selectedCommunity, setSelectedCommunity] = useState(null);
//     const { currentCommunity, communities } = useCommunity();

//   const handlePlusButtonClick = () => {
//       setShowCreateCommunityPage(true);
//         // setShowCommunityPage(false);
//   };

//      return (
//     <div className="app">
//       <button onClick={handlePlusButtonClick}>+</button>
//       {showCreateCommunityPage && <CreateCommunityPage />}
//       {currentCommunity && <CommunityPage community={currentCommunity} />}
//       <div className="community-list">
//         {communities.map((community, index) => (
//           <div key={index} onClick={() => setCurrentCommunity(community)}>
//             {community.title}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// //   return (
// //     <div className="app">
// //       <button onClick={handlePlusButtonClick}>+</button>
// //       {showCreateCommunityPage && <CreateCommunityPage />}
// //       {showCommunityPage && <CommunityPage1 community={mockCommunity} />}
// //     </div>
// //   );
// };

// const App = () => (
//   <CommunityProvider>
//     <AppContent />
//   </CommunityProvider>
// );

// export default App;

// src/App.js
import React, { useState } from 'react';
import { CommunityProvider, useCommunity } from './CommunityContext';
import CreateCommunityPage from './components/Community/CreateCommunityPage';
import CommunityPage from './components/Community/CommunityPage';
import './styles.css';

const AppContent = () => {
  const [showCreateCommunityPage, setShowCreateCommunityPage] = useState(false);
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const { communities } = useCommunity();

  const handlePlusButtonClick = () => {
    setShowCreateCommunityPage(true);
    setSelectedCommunity(null); // Close selected community view
  };

  const handleCommunityClick = (community) => {
    setSelectedCommunity(community);
    setShowCreateCommunityPage(false); // Close create community view
  };

  return (
    <div className="app">
      <button onClick={handlePlusButtonClick}>+</button>
      {showCreateCommunityPage && <CreateCommunityPage />}
      {selectedCommunity && <CommunityPage community={selectedCommunity} />}
      {!showCreateCommunityPage && !selectedCommunity && (
        <div className="community-list">
          {communities.map((community, index) => (
            <div key={index} onClick={() => handleCommunityClick(community)}>
              {community.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const App = () => (
  <CommunityProvider>
    <AppContent />
  </CommunityProvider>
);

export default App;
