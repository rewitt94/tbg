import React from 'react';

export interface PlayerResourcesProps {
  readonly wood: number;
  readonly food: number;
  readonly coin: number;
}

export const PlayerResources: React.FC<PlayerResourcesProps> = ({
  wood,
  food,
  coin,
}) => {
  return (
    <div className="flex justify-center" style={{ height: '175px' }}>
      <div
        className="block p-6 rounded-lg shadow-lg
      bg-white max-w-sm grid grid-cols-2 gap-0"
      >
        <div>
          <p style={{ marginBottom: '15px' }}>Resource Store:</p>
          <ul>
            <li>{wood} Wood</li>
            <li>{food} Food</li>
            <li>{coin} Coin</li>
          </ul>
        </div>
        <div>
          <button
            className="inline-block px-6 py-2.5
            bg-green-800 text-white font-medium text-xs
            leading-tight uppercase rounded shadow-lg
            hover:bg-green-600 hover:shadow-lg focus:bg-green-800
            focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-green-600 active:shadow-lg transition
            duration-150 ease-in-out"
          >
            Buy resource cards
          </button>
        </div>
      </div>
    </div>
  );
};
