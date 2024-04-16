import headerImg from './assets/react-core-concepts.png'
import componentImg from './assets/components.png'
 import { CORE_CONCEPTS } from './data.js'







function CoreConcept({image, description,title}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{ title}</h3>
      <p>{description}</p>
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
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* <CoreConcept {...CORE_CONCEPTS[1]} /> */}
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
