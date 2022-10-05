import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import SearchBar from './SearchBar';
import { todosSlice } from '~/redux/slice/todosSlice';

function Header() {
    const [todoInput, setTodoInput] = useState('');
    const inputRef = useRef();
    const dispatch = useDispatch();

    const handleInput = (e) => {
        if (e.target.value.startsWith(' ')) return;
        setTodoInput(e.target.value);
    };

    const handleSubmit = (e) => {
        if (!e.target.value.trim()) return;
        if (e.keyCode === 13) {
            dispatch(
                todosSlice.actions.addTodo({
                    id: uuidv4(),
                    name: todoInput,
                    completed: false,
                }),
            );
            handleReset();
        }
    };

    const handleReset = () => {
        setTodoInput('');
        inputRef.current.focus();
    };

    return (
        <header className="header">
            <h1>todos</h1>
            <div>
                <SearchBar></SearchBar>
                <input
                    className="new-todo"
                    ref={inputRef}
                    placeholder="What needs to be done?"
                    autoFocus
                    value={todoInput}
                    onChange={handleInput}
                    onKeyDown={handleSubmit}
                />
            </div>
        </header>
    );
}

export default Header;
