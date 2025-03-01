import './styles.css'
import coreConceptsImg from "./assets/react-core-concepts.png";


const contentDescriptions = ['Fundamentals', 'Crucial', 'Core']
function genRandom(max) {
  return Math.floor(Math.random()* (max + 1))
}

function Header() {
  const descriptions = contentDescriptions[genRandom(2)]

  
  return (
    <header>
      {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
      <img src={coreConceptsImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptions} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcepts() { 
  return (
    <li>
      <img src="..." alt="" />
      <h3>Title</h3>
      <p>Description</p>
    </li>
  )
}
function App() {
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts />
            
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

