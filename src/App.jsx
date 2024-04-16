import headerImg from './assets/react-core-concepts.png'
import componentImg from './assets/components.png'
 import { CORE_CONCEPTS } from './data.js'



const reactDescriptions = ['Fundamental', 'Crucial', 'Core ']


function getRandomVal(val) {
  return Math.floor(Math.random() *(val + 1))
}


function Header() {
  const description = reactDescriptions[getRandomVal(2)]
  return (
    <header>
      <img src={headerImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{ props.title}</h3>
      <p>{props.description}</p>
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
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description="The core UI building block"
              image={componentImg}
            />
            <CoreConcept
            
            />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
