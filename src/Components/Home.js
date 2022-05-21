import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../start.png';
import "./home.css";

function Home(){
    const history = useNavigate();
    const startGame = () => {
      history("/game")
    }
    return(
        <div className='App'>
          <h1 className='heading'>PATTER IDENTIFICATION GAME</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <button className="start" onClick={startGame}><h2 className="text">START GAME</h2></button>
          <h2>Instructions:</h2>
          <p className='inst'>This is a pattern identification game.The most basic form of pattern identification is finding an number,alphabet or World
            among a sample pool.In the game an 1x4 grid is displayed.You need to find the correct answer to the question displayed
            above by clicking on it.If the answer is correct the next question appears else the game ends...!!!
          </p>
        </div>
    );
}

export default Home;