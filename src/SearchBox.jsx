import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox() {

// then added state variable for search-box
let [city, setCity] = useState("");
// adding api of weather...from openweathermap.org api (website)
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "ca8017f2a2226fc8e181a39a18f54519";

// creating method for getting weather info
let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    // 
};

let handleChange =  (event) => {
    setCity(event.target.value);
}

let handleSubmit =  (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo(); //calling this function on form submit 
}

    return (
        <div className='searchBox'>
            <h3>Search for a weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City_Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br><br></br><br></br>
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    );
}