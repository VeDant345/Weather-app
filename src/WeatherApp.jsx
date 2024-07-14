import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city : "Mumbai",
        feelsLike : 30.6,
        humidity : 89,
        maxTemp : 26.99,
        minTemp : 26.99,
        pressure : 1005,
        temp : 26.99,
        weather : "rainy",
    });
    let updateInfo = (newData)=>{
        setWeatherInfo(newData);  
    }
    return(
        <>
        <h1 style={{textAlign:"center"}}>Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </>
    );
}