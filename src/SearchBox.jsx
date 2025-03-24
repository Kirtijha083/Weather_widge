import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {

// then added state variable for search-box
let [city, setCity] = useState("");
// adding api of weather...from openweathermap.org api (website)
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "ca8017f2a2226fc8e181a39a18f54519";

// creating method for getting weather info
let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    // console.log(jsonResponse);
    //creating new object from jsonResponse
    let result = {
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
};

let handleChange =  (event) => {
    setCity(event.target.value);
}

let handleSubmit =  async (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
  let newinfo = await getWeatherInfo(); //calling this function on form submit 
  updateInfo(newinfo);
}

    return (
        <div className='searchBox'>
            {/* <h3>Search for a weather</h3> */}
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City_Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br><br></br><br></br>
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    );
}