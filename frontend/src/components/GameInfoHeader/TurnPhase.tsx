import React from "react";

export interface TurnPhaseProps {
  readonly phase: 1 | 2 | 3 | 4;
}

export const TurnPhase: React.FC<TurnPhaseProps> = ({
  phase,
}) => {
  return <div style={{ border: 'solid', borderRadius: '10px', backgroundColor: '#fff8f2', display: 'inline-flex', width: '500px', margin: '20px', padding: '5px' }}>
      {['BUY', 'SHIFT', 'ACTIVE', 'SUBMITTED'].map((turnPhaseName, index) => {
        return <div style={{ flex: 1, color: phase === index + 1 ? 'red' : 'black' }}>
            <p>{turnPhaseName}</p>
        </div>
      })}
    </div>;
};