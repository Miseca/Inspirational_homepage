import React, { useEffect } from "react";
//Importing Selectors and useSelect
import { selectWeather, isLoadingWeather, loadWeather } from "./weatherSlice";
import { useSelector, useDispatch } from "react-redux";


export default function Weather() {
    const dispatch = useDispatch();
    const isLoading = useSelector(isLoadingWeather);
    const weather = useSelector(selectWeather);
    var weatherStats = {};

    useEffect(() => {
        dispatch(loadWeather());
        
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }
    else if (!weather) {
        return null;
    }



    weatherStats = {
        description: weather.weather[0].description,
        icon: weather.weather[0].icon,
        temp: weather.main.temp,
        name: weather.name
    }

    return (
        <div>
            <h4>Weather App</h4>
            <span>{weatherStats.name}</span>
            <img src = {`http://openweathermap.org/img/wn/${weatherStats.icon}@2x.png`} alt = "Weather Icon"/>
            <span>{weatherStats.temp} &#8451;</span>
            <span>{weatherStats.description}</span>
        </div>
    );
}