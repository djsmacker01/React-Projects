import React from "react";
import ReactDOM from "react-dom";
import CommunityPage from "./Community/CommunityPage";
import "./styles.css";

const App = () => {
  return (
    <div className="app">
      <CommunityPage communityTitle="Toxicology" />
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
