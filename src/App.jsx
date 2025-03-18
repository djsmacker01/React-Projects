import "./styles.css";
import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/CoreConcept/TabButton";
import { EXAMPLES } from "./dataContent";
const contentDescriptions = ["Fundamentals", "Crucial", "Core"];

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  // This should output a content for each button clicked
  function handleClick(selectedBtn) {
    // selectedBtn => 'components', 'jsx', 'props','state'
    setSelectedTopic(selectedBtn);
    // console.log(selectedTopic);
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
            <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton onSelect={() => handleClick("jsx")}>Jsx</TabButton>
            <TabButton onSelect={() => handleClick("props")}>Props</TabButton>
            <TabButton onSelect={() => handleClick("state")}>State</TabButton>
          </menu>
          {!selectedTopic ? <p>Please select a topic.</p> : null}

          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null}
        </section>
        {/* {selectedTopic} */}
      </main>
    </div>
  );
}

export default App;
