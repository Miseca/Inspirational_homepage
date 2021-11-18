import React, { useEffect } from "react";
//Importing Selectors and useSelect
import { selectWeather, isLoadingWeather, loadWeather } from "./weatherSlice";
import { useSelector, useDispatch } from "react-redux";


export default function Weather() {
    const dispatch = useDispatch();
    const isLoading = useSelector(isLoadingWeather);
    const weather = useSelector(selectWeather);

    useEffect(() => {
        dispatch(loadWeather());
        
    }, [dispatch])
    
    if (isLoading) {
        return <div>Loading...</div>
    }
    else if (!weather) {
        return null;
    }

    return (
        <div className = "weather-app">
            <div className = "weather-icon">
                <img src = {`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt = "Weather Icon"/>
            </div>
            <div className = "weather-text">
                <span>{weather.name}</span>
                <span className = "weather-temp">{weather.temp} &#8451;</span>
                <span>{weather.description}</span>
            </div>
        </div>
    );
}