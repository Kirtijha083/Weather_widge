import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox() {

// then added state variable for search-box
let [city, setCity] = useState("");

    return (
        <div className='searchBox'>
            <h3>Search for a weather</h3>
            <form>
                <TextField id="city" label="City_Name" variant="outlined" required value={city}/>
                <br></br><br></br><br></br>
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    );
}