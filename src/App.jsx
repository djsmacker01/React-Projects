import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './dataContent.js';

function App() {

  const [selectedTopic, setSelectedTopic] = useState();


  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    //  alert(selectedButton);

  }

   let tabContent = <p>Please click on the button to select a topic</p>;
  if (selectedTopic) {
  tabContent = (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );
  
}
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* <CoreConcept {...CORE_CONCEPTS[1]} /> */}
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleClick("jsx")}>
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleClick("props")}>
              Props
            </TabButton>
            <TabButton onSelect={() => handleClick("state")}>State</TabButton>
          </menu>
          {tabContent}
          {/* {!selectedTopic && <p>Please Select a topic</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
        </section>
        {/* <h2>Time to get started!</h2> */}
      </main>
    </div>
  );
}

export default App;
