import React from 'react';

export interface Viking {
  readonly name: string;
}

interface UnitQueueProps {
    vikings: Viking[]
}

export const UnitQueue: React.FC<UnitQueueProps> = ({
  vikings,
}) => {
  return <div style={{display: 'inline-flex', width: Math.min(vikings.length * 10, 80) + 'vw'}}>
    {vikings.map((viking) => {
      return <div key={viking.name}>
        <button className="inline-block px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-green-600 hover:shadow-lg focus:bg-green-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out">shift</button>
        <div className="flex justify-center">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{viking.name}</h5>
            <img src={'./icons/viking.png'}/>
          </div>
        </div>
      </div>;
    })}
  </div>;
};
