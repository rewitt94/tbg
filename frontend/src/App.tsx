import React, { useEffect } from "react";
import './App.css';
import { GameInfoHeader } from "./components/GameInfoHeader/GameInfoHeader";
import { GameInteractiveArea } from "./components/GameInteractiveArea/GameInteractiveArea";

function App() {

  const [season, setSeason] = React.useState<1 | 2 | 3 | 4>(1);
  const [turnNumber, setTurnNumber] = React.useState<number>(1);
  const [startUpdateRequired, setStartUpdateRequired] = React.useState<boolean>(true);
  const [updateInProgress, setUpdateInProgress] = React.useState<boolean>(false);


  const nextTurn = async () => {
    await fetch('http://localhost:8000/game', {
      method: 'POST'
    });
    setStartUpdateRequired(true);
  }

  const getGameState = async () => {
    const response = await fetch('http://localhost:8000/game', {
      method: 'GET'
    });
    const gameState = await response.json();
    setSeason(gameState.season)
    setTurnNumber(gameState.turnNumber)
    setTimeout(() => setUpdateInProgress(false), 500);
  }

  useEffect(() => {
    if (startUpdateRequired === true && updateInProgress == false) {
      setStartUpdateRequired(false)
      setUpdateInProgress(true)
      getGameState();
    }
  });

  const fadeOut = {
    opacity: '0',
    transition: 'opacity 1s',
    fontSize: '25px',
    fontWeight: 'strong',
    color: 'white',
    margin: '0',

  }
  const fadeIn = {
    opacity:'1',
    fontSize: '25px',
    fontWeight: 'bold',
    color: 'white',
    margin: '0',
  }
  return (
    <div style={{ textAlign: 'center', backgroundColor: 'black', height: '100vh', width: '100vw' }} >
      <div>
        <p style={updateInProgress ? fadeIn : fadeOut}>UPDATING FROM SERVER</p>
      </div>
      <div style={{ position: 'fixed', backgroundColor: 'white', top: '15vh', height: '70vh', width: '100vw' }} >
        <GameInfoHeader turnCounterProps={{ season, turnNumber }}></GameInfoHeader>
        <GameInteractiveArea></GameInteractiveArea>
      </div>
    </div>
  );
}

export default App;
