import React from 'react';
import { UnitQueue } from './UnitQueue';

export const GameInteractiveArea: React.FC<{}> = ({}) => {
  return (
    <div style={{ marginTop: '10vh' }}>
      <UnitQueue
        vikings={['jarl', 'farmer', 'villager'].map((name) => {
          return { name };
        })}
      ></UnitQueue>
    </div>
  );
};
