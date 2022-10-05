import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { todosSelector } from '~/redux/selectors';
import { filtersSlice } from '~/redux/slice/filtersSlice';
import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

function SearchBar() {
    const [searchValue, setSearchValue] = useState('');
    const todos = useSelector(todosSelector);
    const inputRef = useRef();
    const dispatch = useDispatch();

    const handleSearchInput = (e) => {
        setSearchValue(e.target.value);
        dispatch(filtersSlice.actions.setSearch({ value: e.target.value }));
    };

    return (
        <>
            {todos.length > 0 && (
                <input
                    ref={inputRef}
                    className={cx('search-bar')}
                    type="search"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={handleSearchInput}
                />
            )}
        </>
    );
}

export default SearchBar;
