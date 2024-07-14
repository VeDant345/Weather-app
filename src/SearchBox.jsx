import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "eb145b3549368f2c3cb6023c3b949c76";
    
    let Info = async ()=>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            minTemp : jsonResponse.main.temp_min,
            maxTemp : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            pressure : jsonResponse.main.pressure,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    };

    let handleInputChange = (event)=>{
        setCity(event.target.value)
    }
    let handleSubmit = async (event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await Info();
        updateInfo(newInfo);
    }
    return(
        <>
        <div className='input'>
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" value={city} onChange={handleInputChange} required/>
            <br /><br />
            <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
        </>
    );
}