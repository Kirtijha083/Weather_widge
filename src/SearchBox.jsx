import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

    // then added state variable for search-box
    let [city, setCity] = useState("");
    let [error, seterror] = useState(false);  //for error

    // adding api of weather...from openweathermap.org api (website)
   
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;



    // creating method for getting weather info
    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            // let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            let jsonResponse = await response.json();
            // console.log(jsonResponse);
            //creating new object from jsonResponse
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            // console.log(result);
            return result;
        } catch (err) {
            throw err;
        }

    };

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newinfo = await getWeatherInfo(); //calling this function on form submit 
            updateInfo(newinfo);
        } catch (err) {
            seterror(true);
        }

    }

    return (
        <div className='searchBox'>
            {/* <h3>Search for a weather</h3> */}
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City_Name" variant="outlined" required value={city} onChange={handleChange} />
                <br></br><br></br><br></br>
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{ color: "red" }}>NO such place exists!!</p>}
            </form>
        </div>
    );
}