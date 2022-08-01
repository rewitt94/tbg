import React from 'react';

export interface CardMarketProps {}

export const CardMarket: React.FC<CardMarketProps> = ({}) => {
  return (
    <div className="flex justify-center" style={{ height: '175px' }}>
      <div
        className="block p-6 rounded-lg shadow-lg
      bg-white max-w-sm"
      >
        <h1>Card Market:</h1>
        <div style={{ marginTop: '10px' }}>
          <button
            className="inline-block px-6 py-2.5
            bg-green-800 text-white font-medium text-xs
            leading-tight uppercase rounded shadow-lg
            hover:bg-green-600 hover:shadow-lg focus:bg-green-800
            focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-green-600 active:shadow-lg transition
            duration-150 ease-in-out"
          >
            Buy unit cards
          </button>
        </div>
        <div style={{ marginTop: '10px' }}>
          <button
            className="inline-block px-6 py-2.5
            bg-green-800 text-white font-medium text-xs
            leading-tight uppercase rounded shadow-lg
            hover:bg-green-600 hover:shadow-lg focus:bg-green-800
            focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-green-600 active:shadow-lg transition
            duration-150 ease-in-out"
          >
            Buy province cards
          </button>
        </div>
      </div>
    </div>
  );
};
