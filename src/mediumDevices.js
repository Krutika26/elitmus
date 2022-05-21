import React from 'react'
import './App.css';
import Game from "./MediumComponents/Game";
import Home from "./MediumComponents/Home";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function MediumDevices() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/game" element={<Game/>} />
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default MediumDevices;
