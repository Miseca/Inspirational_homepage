import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadWeather = createAsyncThunk(
    'weather/loadWeather',
    async () => {
        //FOR FETCHING FROM Unsplash API (needs work)
        // const response = await fetch(
        //     '',
        //     {
        //         method: 'GET',

        //     }
        // );
        //const json = await response.json();
        //CONSOLE LOG
        //console.log("inside thunk ");
        //console.log(json);
        //return json;
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