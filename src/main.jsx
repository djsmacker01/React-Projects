import React from 'react'
import ReactDOM from 'react-dom/client'
import App2 from './App2.jsx'
import './index.css'
import './components/Header/Header.css'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App2 />
    </Router>
  </React.StrictMode>
);
