import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

export default function WeatherApp() {
    return (
        <div style={{textAlign: "center"}}>
            <h1>Weather App By using React and Material UI</h1>
            <SearchBox />
            <InfoBox />
        </div>
    );
}