import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'all',
    search: '',
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setStatus(state, action) {
            state.status = action.payload.filter;
        },
        setSearch(state, action) {
            state.search = action.payload.value;
        },
    },
});

export default filtersSlice.reducer;
