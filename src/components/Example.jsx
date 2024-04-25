import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../dataContent";
import Section from "./Section";

export default function Example() {
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
      <Section title='Examples' id="examples">
       
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
          <TabButton
            isSelected={selectedTopic === "state"}
            onSelect={() => handleClick("state")}>
            State
          </TabButton>
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
      </Section>
    );
}











