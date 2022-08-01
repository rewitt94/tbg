import React from 'react';

export interface TurnPhaseProps {
  readonly phase: 1 | 2 | 3 | 4;
}

export const TurnPhase: React.FC<TurnPhaseProps> = ({ phase }) => {
  return (
    <div>
      <div className="flex justify-center" style={{ height: '175px' }}>
        <div
          className="block p-6 rounded-lg shadow-lg bg-white max-w-sm"
          style={{ width: '500px' }}
        >
          <p style={{ marginBottom: '25px' }}>Turn Phase:</p>
          <div className="w-full bg-gray-200 h-1">
            <div className="bg-blue-600 h-1" style={{ width: '45%' }}></div>
          </div>
          <div className="flex">
            <div className="flex-1">Buy</div>
            <div className="flex-1">Shift</div>
            <div className="flex-1">Stock</div>
            <div className="flex-1">thing?</div>
            <div className="flex-1">thing?</div>
          </div>
        </div>
      </div>
    </div>
  );
};
