import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';



export default function InfoBox({info}) {
  const init_URL_img = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const hot_weather_img = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const cold_weather_img = "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const rain_weather_img = "https://images.unsplash.com/photo-1438449805896-28a666819a20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    // creating object
    // let info = {
    //     city: "Delhi",
    //     feelsLike: 31.65,
    //     humidity: 15,
    //     temp: 34.05,
    //     tempMax: 34.05,
    //     tempMin: 34.05,
    //     weather: "haze",
    // };//...this object will pass in the form of props through weatherApp.jsx

    return (
        <div className="InfoBox">
            {/* <h1>Weather Info - {info.weather}</h1> */}
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? rain_weather_img : info.temp > 15 ? hot_weather_img : cold_weather_img}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" color = 'text.secondary' component={"span"} >
                       <p>Temperature = {info.temp}&deg;C</p>
                       <p>Humidity = {info.humidity}</p>
                       <p>Min_Temp = {info.tempMin}&deg;C</p>
                       <p>Max_Temp = {info.tempMax}&deg;C</p>
                       <p>The weather can be described as <i><b>{info.weather}</b></i> and feels like = {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
        </div>
    );
}

// for degree symbol = &deg;