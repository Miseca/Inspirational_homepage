import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCurrentQuote = createAsyncThunk(
    'quotes/loadCurrentQuote',
    async () => {
        //FOR FETCHING FROM REAL API
        //const response = await fetch(`https://zenquotes.io/api/quotes/`);
        //const json = await response.json();
        //CONSOLE LOG
        //console.log("inside thunk loadCurrentQuote");
        //console.log(json);
        //return json;

        // const response = await fetch("../../data/quotes.JSON");
        // const json = await response.json();
        // console.log(json);
        // return json;
    }
);


export const quotesSlice = createSlice({
    name: 'quotes',
    initialState: {
        quote: undefined,
        isLoadingCurrentQuote: false,
        hasError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCurrentQuote.pending, (state) => {
                state.isLoadingCurrentQuote = true;
                state.hasError = false;
            })
            .addCase(loadCurrentQuote.fulfilled, (state, action) => {
                state.isLoadingCurrentQuote = false;
                state.hasError = false;
                state.quote = action.payload;
            })
            .addCase(loadCurrentQuote.rejected, (state) => {
                state.isLoadingCurrentQuote = false;
                state.hasError = true;
            })
    }
});


export const selectCurrentQuote = (state) => state.quote;
export const isLoadingCurrentQuote = (state) => state.isLoadingCurrentQuote;

export default quotesSlice.reducer;