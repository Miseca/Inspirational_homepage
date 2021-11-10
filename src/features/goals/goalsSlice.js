import { createSlice } from '@reduxjs/toolkit';

export const goalsSlice = createSlice({
    name: 'goals',
    initialState: {
        453: {
            id: 453,
            text: "Hello",
            completedStatus: false
        },
        999: {
            id: 999,
            text: "Wo0o0o0o",
            completedStatus: false
        }
    },
    reducers: {
        addGoals: (state, action) => {
            const {id, text} = action.payload;
            state[id] = {
                id,
                text,
                completedStatus: false
            };
        },
        deleteGoals: (state, action) => {
            const {id} = action.payload;
            //Works Fine for both preset goals and newly added goals not sure if this is the best method.
            delete state[id];
            
            /* (REDUCE METHOD) Works only for newly created goals not sure why it doesnt work for preset goals.
            const deleteGoal = Object.keys(state).reduce((acc, key) => {
                if (key !== id) {
                    acc[key] = state[key]
                }
                return acc
                }, {})
            return deleteGoal;
            */
        },
        completeGoals: (state, action) => {
            const {id} = action.payload;
            state[id].completedStatus = true;
        }
    }
});

export const selectGoals = (state) => state.goals;
export const { addGoals, deleteGoals, completeGoals } = goalsSlice.actions;
export default goalsSlice.reducer;