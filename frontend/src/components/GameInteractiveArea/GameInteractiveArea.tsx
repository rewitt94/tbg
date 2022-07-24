import React from 'react';
import {UnitQueue} from './UnitQueue';

export const GameInteractiveArea: React.FC<{}> = ({
}) => {
  return <div>
    <div style={{marginTop: '10vh'}}>
      <UnitQueue vikings={['jarl', 'farmer', 'villager'].map((name) => {
        return {name};
      })}></UnitQueue>
    </div>
    <div style={{marginTop: '10vh'}}>
      <button className="inline-block px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-green-600 hover:shadow-lg focus:bg-green-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out">Next Turn</button>
    </div>
  </div>;
};
