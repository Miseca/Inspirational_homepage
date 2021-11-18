import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadInspirationalBackgrounds = createAsyncThunk(
    'inspirationalBackgrounds/loadInspirationalBackgrounds',
    async () => {
        // FOR FETCHING FROM Unsplash API (needs work)
        const response = await fetch(
            `https://api.unsplash.com/search/?page=1&query=landscape&client_id=q_fwbZLSMx3LdAF_WGYAJfKTms9EAL7BO172X1rw8A4`,
            {
                method: 'GET',
                mode: "cors",
            }
        );
        const json = await response.json();
        // CONSOLE LOG
        // console.log("inside thunk ");
        // console.log(json);
        return json.photos.results;
    }
);


export const inspirationalBackgroundsSlice = createSlice({
    name: 'inspirationalBackgrounds',
    initialState: {
        inspirationalBackgrounds: [],
        isLoadingInspirationalBackgrounds: false,
        hasError: false,
        backgroundIndex: 0
    },
    reducers: {
        nextImage: (state) => {
            state.backgroundIndex = state.backgroundIndex + 1;
            if(state.backgroundIndex === state.inspirationalBackgrounds.length) {
                state.backgroundIndex = 0;
            }
        },
        prevImage: (state) => {
            state.backgroundIndex = state.backgroundIndex - 1;
            if(state.backgroundIndex === -1) {
                state.backgroundIndex = state.inspirationalBackgrounds.length - 1;
            }
        }
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


export const selectInspirationalBackgrounds = (state) => state.inspirationalBackgrounds.inspirationalBackgrounds[state.inspirationalBackgrounds.backgroundIndex];
export const isLoadingInspirationalBackgrounds = (state) => state.isLoadingInspirationalBackgrounds;
export const { nextImage, prevImage } = inspirationalBackgroundsSlice.actions;

export default inspirationalBackgroundsSlice.reducer;