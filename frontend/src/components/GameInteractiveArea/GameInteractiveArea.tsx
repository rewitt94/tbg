import React from "react";
import { UnitQueue } from "./UnitQueue";

export const GameInteractiveArea: React.FC<{}> = ({
}) => {
  return <div>
        <div style={{ marginTop: '10vh'}}>
          <UnitQueue vikings={['jarl','farmer','villager'].map(name => { return { name }})}></UnitQueue>
        </div>
        <div style={{ marginTop: '20vh' }}>
          <button style={{ fontSize: '30px', padding: '10px',  border: 'solid', borderRadius: '10px', }}>Next Turn</button>
        </div>
    </div>
};