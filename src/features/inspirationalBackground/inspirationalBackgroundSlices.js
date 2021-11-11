import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadInspirationalBackgrounds = createAsyncThunk(
    'inspirationalBackgrounds/loadInspirationalBackgrounds',
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


export const inspirationalBackgroundsSlice = createSlice({
    name: 'inspirationalBackgrounds',
    initialState: {
        inspirationalBackgrounds: {},
        isLoadingInspirationalBackgrounds: false,
        hasError: false
    },
    extraReducers: (builder) => {
        builder
                .addCase(loadInspirationalBackgrounds.pending, (state) => {
                    state.isLoadingInspirationalBackgrounds = true;
                    state.hasError = false;
                })
                .addCase(loadInspirationalBackgrounds.fulfilled, (state, action) => {
                    state.isLoadingInspirationalBackgrounds = false;
                    state.hasError = false;
                    state.inspirationalBackgrounds = action.payload;
                })
                .addCase(loadInspirationalBackgrounds.rejected, (state) => {
                    state.isLoadingInspirationalBackgrounds = false;
                    state.hasError = true;
                })
    }
});


export const selectInspirationalBackgrounds = (state) => state.inspirationalBackgrounds.inspirationalBackgrounds;
export const isLoadingInspirationalBackgrounds = (state) => state.isLoadingInspirationalBackgrounds;

export default inspirationalBackgroundsSlice.reducer;