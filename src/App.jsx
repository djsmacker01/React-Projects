import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import Example from "./components/Example.jsx";

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
