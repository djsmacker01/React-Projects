import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import App1 from './components/App1.jsx'
import App3 from './App3.jsx'
import './index.css'
import './components/Header/Header.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <App1 />
    <App3 />
  </React.StrictMode>,
)
