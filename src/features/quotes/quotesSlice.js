import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadQuotes = createAsyncThunk(
    'quotes/loadQuotes',
    async () => {
        //FOR FETCHING FROM REAL API
        const response = await fetch(
            `https://quotes.rest/qod`,
            {
                method: 'GET',
                mode: "cors"
            }
        );
        const json = await response.json();
        //CONSOLE LOG
        //console.log("inside thunk loadCurrentQuote");
        //console.log(json.contents.quotes);
        const newQuote = await json.contents.quotes;
        return newQuote;


    }
);

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState: {
        quote: [],
        initialIndex: 0,
        isLoadingQuotes: false,
        hasError: false
    },
    reducers: {
        nextQuote: (state) => {
            state.initialIndex = state.initialIndex + 1;
            if(state.initialIndex === state.quote.length) {
                state.initialIndex = 0;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadQuotes.pending, (state) => {
                state.isLoadingQuotes = true;
                state.hasError = false;
            })
            .addCase(loadQuotes.fulfilled, (state, action) => {
                state.isLoadingQuotes = false;
                state.hasError = false;
                state.quote = action.payload;
            })
            .addCase(loadQuotes.rejected, (state) => {
                state.isLoadingQuotes = false;
                state.hasError = true;
            })
    }
});


export const selectQuotes = (state) => state.quotes.quote[state.quotes.initialIndex];
export const isLoadingQuotes = (state) => state.isLoadingQuotes;
export const { nextQuote } = quotesSlice.actions;

export default quotesSlice.reducer;