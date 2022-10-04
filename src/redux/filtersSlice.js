import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'all',
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilter(state, action) {
            state.status = action.payload;
        },
    },
});

export default filtersSlice.reducer;
