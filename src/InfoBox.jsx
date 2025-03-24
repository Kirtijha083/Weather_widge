import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox() {
  const init_URL_img = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    // creating object
    let info = {
        city: "Delhi",
        feelsLike: 31.65,
        humidity: 15,
        temp: 34.05,
        tempMax: 34.05,
        tempMin: 34.05,
        weather: "haze",
    };

    return (
        <div className="InfoBox">
            {/* <h1>Weather Info - {info.weather}</h1> */}
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={init_URL_img}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       {info.city}
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