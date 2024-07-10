import React from 'react'
import ReactDOM from 'react-dom/client'
import App1 from './App1.jsx'
import './index.css'
import './components/Header/Header.css'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App1 />
    </Router>
  </React.StrictMode>
);
