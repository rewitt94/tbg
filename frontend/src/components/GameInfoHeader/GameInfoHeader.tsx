import React from 'react';
import {TurnCounter, TurnCounterProps} from './TurnCounter';
import {TurnPhase} from './TurnPhase';


export interface GameInfoHeaderProps {
  readonly turnCounterProps: TurnCounterProps
}

export const GameInfoHeader: React.FC<GameInfoHeaderProps> = ({
  turnCounterProps,
}) => {
  return <div style={{textAlign: 'left', display: 'flex'}}>
    <TurnCounter season={turnCounterProps.season} turnNumber={turnCounterProps.turnNumber} />
    <TurnPhase phase={1} />
  </div>;
};
