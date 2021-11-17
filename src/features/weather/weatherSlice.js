import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadWeather = createAsyncThunk(
    'weather/loadWeather',
    async () => {
        // FOR FETCHING FROM Unsplash API (needs work)
        const response = await fetch(
            'https://api.openweathermap.org/data/2.5/weather?id=7281804&units=metric&appid=b777088271bc4ceeff8897bbac0fc088',
            {
                method: 'GET',
                mode: "cors"
            }
        );
        const json = await response.json();
        // CONSOLE LOG
        // console.log("inside weather fetch ");
        // console.log(json);
        const weather = {
            description: json.weather[0].description, 
            icon: json.weather[0].icon,
            temp: json.main.temp,
            name: json.name
        }
        console.log(weather)
        return weather;
    }
);


export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: {},
        isLoadingWeather: false,
        hasError: false,
    },
    extraReducers: (builder) => {
        builder
                .addCase(loadWeather.pending, (state) => {
                    state.isLoadingWeather = true;
                    state.hasError = false;
                })
                .addCase(loadWeather.fulfilled, (state, action) => {
                    state.isLoadingWeather = false;
                    state.hasError = false;
                    state.weather = action.payload;

                })
                .addCase(loadWeather.rejected, (state) => {
                    state.isLoadingWeather = false;
                    state.hasError = true;
                })
    }
});


export const selectWeather = (state) => state.weather.weather;
export const isLoadingWeather = (state) => state.isLoadingWeather;

export default weatherSlice.reducer;