import React from 'react'
import ReactDOM from 'react-dom/client'
import App4 from './App4.jsx'
import './index.css'
import './components/Header/Header.css'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App4 />
    </Router>
  </React.StrictMode>
);
