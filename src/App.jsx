import headerImg from './assets/react-core-concepts.png'
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

function CoreConcept() {
  return (
    
  )
}


function App() {
  return (
    <div>
     <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
