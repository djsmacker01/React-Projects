import "./styles.css";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/CoreConcept/TabButton";

const contentDescriptions = ["Fundamentals", "Crucial", "Core"];

function App() {
  // This should output a content for each button clicked
  function handleClick(selectedBtn) {
    console.log(selectedBtn);
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
        </section>
        dynamic content
      </main>
    </div>
  );
}

export default App;
