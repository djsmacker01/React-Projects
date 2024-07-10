// import React, { useState } from "react";
// import { Route, Routes, Link, useNavigate } from "react-router-dom";
// import CreateCommunity from "./components/CreateCommunity";
// import CommunityPage from "./components/Community/CommunityPage";

// const App1 = () => {
//   const [communities, setCommunities] = useState([]);
//   const navigate = useNavigate();

//   const handleCreateCommunity = (community) => {
//     setCommunities([...communities, community]);
//     navigate(`/community/${community.title}`);
//   };

//   return (
//     <div>
//       <Link to="/create-community">
//         <button style={buttonStyles}>+</button>
//       </Link>
//       <Routes>
//         <Route
//           path="/create-community"
//           element={<CreateCommunity onCreate={handleCreateCommunity} />}
//         />
//         <Route
//           path="/community/:title"
//           element={<CommunityPage communities={communities} />}
//         />
//       </Routes>
//     </div>
//   );
// };

// const buttonStyles = {
//   fontSize: "24px",
//   width: "50px",
//   height: "50px",
//   borderRadius: "50%",
//   backgroundColor: "#f90",
//   color: "#fff",
//   border: "none",
//   cursor: "pointer",
//   position: "fixed",
//   bottom: "20px",
//   right: "20px",
// };

// export default App1;

// App1.js
import React, { useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import CreateCommunity from "./components/CreateCommunity";
import CommunityPage from "./components/Community/CommunityPage";

const App1 = () => {
  const [communities, setCommunities] = useState([]);
  const navigate = useNavigate();

  const handleCreateCommunity = (community) => {
    setCommunities([...communities, community]);
    navigate(`/community/${community.title}`);
  };

  return (
    <div>
      <Link to="/create-community">
        <button style={buttonStyles}>+</button>
      </Link>
      <Routes>
        <Route
          path="/create-community"
          element={<CreateCommunity onCreate={handleCreateCommunity} />}
        />
        <Route
          path="/community/:title"
          element={<CommunityPage communities={communities} />}
        />
      </Routes>
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

export default App1;

