import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import Example from "./components/Example.jsx";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import CreateCommunity from "./components/CreateCommunityModal.jsx";
// import CreateCommunityModal from "./components/CreateCommunityModal.jsx";

function App() {
 
  return (
    <>
      <Header />
      {/*  */}
   

      <main>
        {/* <CreateCommunityModal /> */}
        <CoreConcepts /> 
        <Example />
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;
