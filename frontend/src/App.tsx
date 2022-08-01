import React from 'react';
import './App.css';
import { GameInfoHeader } from './components/GameInfoHeader/GameInfoHeader';
import { GameInteractiveArea } from './components/GameInteractiveArea/GameInteractiveArea';
import { GameplayFooter } from './components/GameplayFooter.tsx/GameplayFooter';

function App() {
  const season = 1;
  const turnNumber = 1;
  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          position: 'fixed',
          backgroundColor: 'white',
          margin: '4px',
          width: '100vw',
          height: '100vh',
        }}
      >
        <GameInfoHeader
          turnCounterProps={{ season, turnNumber }}
        ></GameInfoHeader>
        <GameInteractiveArea></GameInteractiveArea>
        <div style={{ bottom: '0px' }}>
          <GameplayFooter></GameplayFooter>
        </div>
      </div>
    </div>
  );
}

export default App;
