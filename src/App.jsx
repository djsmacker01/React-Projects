import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import Example from "./components/Example.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./dataContent.js";

function App() {
 

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts /> 
        <Example />
        {/* <h2>Time to get started!</h2> */}
      </main>
    </div>
  );
}

export default App;
