import './styles.css'
import coreConceptsImg from "./assets/react-core-concepts.png";
import components from "./assets/components.png";
import config from "./assets/config.png";
import jsx from "./assets/jsx-ui.png";
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header'; 
import CoreConcept from './components/CoreConcept/CoreConcept';


const contentDescriptions = ['Fundamentals', 'Crucial', 'Core']
function genRandom(max) {
  return Math.floor(Math.random()* (max + 1))
}

// function Header() {
//   const descriptions = contentDescriptions[genRandom(2)]

  
//   return (
//     <header>
//       {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
//       <img src={coreConceptsImg} alt="Stylized atom" />
//       <h1>React Essentials</h1>
//       <p>
//         {descriptions} React concepts you will need for almost any app you are
//         going to build!
//       </p>
//     </header>
//   );
// }

// function CoreConcepts({title, description,image}) { 
//   return (
//     <li>
//       <img src={image} alt="" />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   )
// }
function App() {
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

