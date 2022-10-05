import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
    editId: '',
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            todo.completed = !todo.completed;
        },
        toggleAll: (state) => {
            const areCompletedAll = state.todos.every((todo) => todo.completed);
            state.todos.forEach((todo) => {
                todo.completed = !areCompletedAll;
            });
        },
        delete: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        },
        submitEditing: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === state.editId);
            todo.name = action.payload.value;
        },
        clearCompleted: (state) => {
            state.todos = state.todos.filter((todo) => !todo.completed);
        },
        setEditId: (state, action) => {
            state.editId = action.payload.id;
        },
    },
});

export default todosSlice.reducer;
