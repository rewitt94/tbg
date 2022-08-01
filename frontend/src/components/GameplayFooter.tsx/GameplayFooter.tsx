import React from 'react';
import { CardMarket } from './CardMarket';
import { PlayerResources } from './PlayerResources';

export interface GameplayFooterProps {
  //   readonly turnCounterProps: TurnCounterProps;
}

export const GameplayFooter: React.FC<GameplayFooterProps> = (
  {
    //   turnCounterProps,
  },
) => {
  return (
    <div style={{ textAlign: 'left', display: 'flex' }}>
      <CardMarket></CardMarket>
      <PlayerResources wood={1} food={2} coin={2} />
    </div>
  );
};
