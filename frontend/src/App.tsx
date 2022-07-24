import React from "react";
import './App.css';
import { GameInfoHeader } from "./components/GameInfoHeader/GameInfoHeader";
import { GameInteractiveArea } from "./components/GameInteractiveArea/GameInteractiveArea";

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ position: 'fixed', backgroundColor: 'white', margin: '4px', width: '100vw' }} >
        <GameInfoHeader turnCounterProps={{ season, turnNumber }}></GameInfoHeader>
        <GameInteractiveArea></GameInteractiveArea>
      </div>
    </div>
  );
}

export default App;
