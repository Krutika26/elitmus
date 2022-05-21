import React from 'react'
import './App.css';
import Game from "./SmallComponents/Game";
import Home from "./SmallComponents/Home";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function SmallDevices() {
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

export default SmallDevices;
