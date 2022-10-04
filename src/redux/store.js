import { configureStore } from '@reduxjs/toolkit';

import todosSlice from './todosSlice';
import filtersSlice from './filtersSlice';

const store = configureStore({
    reducer: {
        todos: todosSlice,
        filters: filtersSlice,
    },
});

export default store;
