import React from 'react'
import './App.css';
import Game from "./LargeComponents/Game";
import Home from "./LargeComponents/Home";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function LargeDevices() {
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

export default LargeDevices;
