// // src/CommunityContext.js
// import React, { createContext, useState, useContext } from 'react';

// const CommunityContext = createContext();

// export const useCommunity = () => useContext(CommunityContext);

// export const CommunityProvider = ({ children }) => {
//   const [communities, setCommunities] = useState([]);
//   const [currentCommunity, setCurrentCommunity] = useState(null);

//   const addCommunity = (community) => {
//     setCommunities([...communities, community]);
//   };

//   const selectCommunity = (communityTitle) => {
//     const community = communities.find(c => c.title === communityTitle);
//     setCurrentCommunity(community);
//   };

//   return (
//     <CommunityContext.Provider
//       value={{ communities, addCommunity, selectCommunity, currentCommunity }}
//     >
//       {children}
//     </CommunityContext.Provider>
//   );
// };

import React, { createContext, useState, useContext } from 'react';

const CommunityContext = createContext();

export const useCommunity = () => useContext(CommunityContext);

export const CommunityProvider = ({ children }) => {
  const [communities, setCommunities] = useState([]);
  const [currentCommunity, setCurrentCommunity] = useState(null);

  const addCommunity = (community) => {
    setCommunities([...communities, community]);
  };

  const selectCommunity = (communityTitle) => {
    const community = communities.find(c => c.title === communityTitle);
    setCurrentCommunity(community);
  };

  return (
    <CommunityContext.Provider
      value={{ communities, addCommunity, selectCommunity, currentCommunity }}
    >
      {children}
    </CommunityContext.Provider>
  );
};
