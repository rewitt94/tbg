import React from "react";

export interface Viking {
  readonly name: string;
}

interface UnitQueueProps {
    vikings: Viking[]
}

export const UnitQueue: React.FC<UnitQueueProps> = ({
  vikings,
}) => {
    return <div style={{ display: 'inline-flex', width: Math.min(vikings.length * 10, 80)  + 'vw', }}>
        {vikings.map(viking => {
            return <div style={{ flex: 1 }}>
                <h2>{viking.name}</h2>
                <img src={'./icons/viking.png'}/>
            </div>
        })}
    </div>
};