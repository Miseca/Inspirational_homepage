import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadQuotes = createAsyncThunk(
    'quotes/loadQuotes',
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
        quote: [
            {
              "q": "Lack of emotion causes lack of progress and lack of motivation.",
              "a": "Tony Robbins",
              "c": "63",
              "h": "<blockquote>&ldquo;Lack of emotion causes lack of progress and lack of motivation.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"
            },
            {
              "q": "The friend is the man who knows all about you, and still likes you.",
              "a": "Elbert Hubbard",
              "c": "67",
              "h": "<blockquote>&ldquo;The friend is the man who knows all about you, and still likes you.&rdquo; &mdash; <footer>Elbert Hubbard</footer></blockquote>"
            }
        ],
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