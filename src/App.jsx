import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';

function App() {
  useState()

   let tabContent = 'Please Click on any Button'

  function handleClick(selectedButton) {
     tabContent = selectedButton
     alert(selectedButton);
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
            <TabButton onSelect={()=> handleClick('components')}>Components</TabButton>
            <TabButton onSelect={()=> handleClick('Jsx')}>JSX</TabButton>
            <TabButton onSelect={()=> handleClick('Props')}>Props</TabButton>
            <TabButton onSelect={()=> handleClick('State')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
        {/* <h2>Time to get started!</h2> */}
      </main>
    </div>
  );
}

export default App;
