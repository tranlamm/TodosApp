import { configureStore } from '@reduxjs/toolkit';

import todosSlice from './slice/todosSlice';
import filtersSlice from './slice/filtersSlice';

const store = configureStore({
    reducer: {
        todos: todosSlice,
        filters: filtersSlice,
    },
});

export default store;
