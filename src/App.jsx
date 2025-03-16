import "./styles.css";
import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/CoreConcept/TabButton";

const contentDescriptions = ["Fundamentals", "Crucial", "Core"];

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please click a topic to select')
  // This should output a content for each button clicked
  function handleClick(selectedBtn) {
    setSelectedTopic(selectedBtn)
    console.log(selectedTopic);
  }
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick("Components")}>
              Components
            </TabButton>
            <TabButton onSelect={() =>handleClick("Jsx")}>Jsx</TabButton>
            <TabButton onSelect={() => handleClick("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleClick("State")}>State</TabButton>
          </menu>
          <div className="tab-con">
            h3
          </div>
        </section>
       {selectedTopic}
      </main>
    </div>
  );
}

export default App;
