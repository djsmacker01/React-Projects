import React from 'react'
import ReactDOM from 'react-dom/client'
// import App4 from './App4.jsx'
import './index.css'
import './components/Header/Header.css'
import { BrowserRouter as Router } from 'react-router-dom'
import CommunityPage from './components/CommunityPage'
import CreatePost from './components/CreatePost'
import App5 from './App5'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      {/* <App4 /> */}
      <CommunityPage />
      {/* <CreatePost/> */}
      <App5/>
    </Router>
  </React.StrictMode>
);
