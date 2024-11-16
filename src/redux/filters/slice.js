import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
		name: ""
}
    
export const filtersSlice = createSlice({
    name: "filters",
    initialState: INITIAL_STATE,
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload;
        }
    }
});
export const selectFilters = (state) => state.filters.name;
export const filtersReducer = filtersSlice.reducer;
export const {changeFilter} = filtersSlice.actions;