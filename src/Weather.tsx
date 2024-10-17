// @flow
import * as React from 'react';

type Props = {
    temp: number
    description: string
    
};
export const Weather = ({temp,description}: Props) => {
    return (
        <div className="weather">
            <p>Temperature: {temp.toFixed(1)} °C</p>
            <p>Weather: {description}</p>
        </div>
    );
};