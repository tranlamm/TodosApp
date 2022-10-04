import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
    },
});

export default todosSlice.reducer;
