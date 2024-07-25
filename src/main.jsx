import React from 'react'
import ReactDOM from 'react-dom/client'
import App3 from './App3.jsx'
import './index.css'
import './components/Header/Header.css'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App3 />
    </Router>
  </React.StrictMode>
);
