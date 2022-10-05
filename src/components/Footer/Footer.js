import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { todosSelector, filtersSelector } from '~/redux/selectors';
import { filtersSlice } from '~/redux/slice/filtersSlice';
import { todosSlice } from '~/redux/slice/todosSlice';

const allFilters = ['all', 'active', 'completed'];

function Footer() {
    const todos = useSelector(todosSelector);
    const filters = useSelector(filtersSelector);
    const dispatch = useDispatch();

    const todosCompleted = useMemo(() => todos.filter((todo) => todo.completed).length, [todos]);
    const todosActive = useMemo(() => todos.filter((todo) => !todo.completed).length, [todos]);

    const handleChangeFilters = (filter) => {
        dispatch(filtersSlice.actions.setFilter({ filter: filter }));
    };

    const handleClearCompleted = () => {
        dispatch(todosSlice.actions.clearCompleted());
    };

    return (
        <>
            {todos.length > 0 && (
                <footer className="footer">
                    <span className="todo-count">
                        <strong>{todosActive}</strong> item left
                    </span>
                    <ul className="filters">
                        {allFilters.map((filter, index) => (
                            <li key={index}>
                                <a
                                    href="/#"
                                    className={filters.status === filter ? 'selected' : ''}
                                    onClick={() => handleChangeFilters(filter)}
                                >
                                    {filter[0].toUpperCase() + filter.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {todosCompleted > 0 && (
                        <button className="clear-completed" onClick={handleClearCompleted}>
                            Clear completed
                        </button>
                    )}
                </footer>
            )}
        </>
    );
}

export default Footer;
