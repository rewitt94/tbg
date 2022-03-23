import React from "react";

export interface TurnCounterProps {
  readonly season: 1 | 2 | 3 | 4;
  readonly turnNumber: number;
}

const getSeasonIcon = (season: 1 | 2 | 3 | 4) => {
    const neverCheck = (_: never) => {}
    let iconPath;
    switch (season) {
        case 1:
            iconPath ="./icons/spring.png"
            break;
        case 2:
            iconPath ="./icons/summer.png"
            break;
        case 3:
            iconPath ="./icons/autumn.png"
            break;
        case 4:
            iconPath ="./icons/winter.png"
            break;
        default:
            neverCheck(season)
    }
    return <img style={{  height: '100px' }} src={iconPath}/>
}

export const TurnCounter: React.FC<TurnCounterProps> = ({
  season,
  turnNumber,
}) => {
  return <div style={{ border: 'solid', borderRadius: '10px', backgroundColor: '#fff8f2', display: 'inline-flex', width: '500px', margin: '20px', padding: '5px' }}>
      <div style={{ flex: 2, fontSize: '30px'}}><p>Turn Number: {turnNumber}</p></div>
      <div style={{ flex: 1 }}>{getSeasonIcon(season)}</div>
    </div>;
};