import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelsLike: 31.65,
        humidity: 15,
        temp: 34.05,
        tempMax: 34.05,
        tempMin: 34.05,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}