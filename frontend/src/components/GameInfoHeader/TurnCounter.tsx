import React from "react";

export interface TurnCounterProps {
  readonly season: 1 | 2 | 3 | 4;
  readonly turnNumber: number;
}

const getSeasonImage = (season: 1 | 2 | 3 | 4) => {
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
    return <div className="flex justify-center" style={{height: "175px"}}>
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <p style={{marginBottom: "5px"}}>Turn Number: {turnNumber}</p>
            {getSeasonImage(season)}
        </div>
    </div>
};