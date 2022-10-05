import { createSelector } from '@reduxjs/toolkit';

export const todosSelector = (state) => state.todos.todos;
export const editingSelector = (state) => state.todos.editId;
export const filtersSelector = (state) => state.filters;

export const todosRemainSelector = createSelector(todosSelector, filtersSelector, (todos, filters) => {
    todos = todos.filter((todo) => todo.name.toLowerCase().includes(filters.search.toLowerCase()));

    switch (filters.status) {
        case 'active':
            return todos.filter((todo) => !todo.completed);
        case 'completed':
            return todos.filter((todo) => todo.completed);
        default:
            return todos;
    }
});
