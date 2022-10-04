import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { todosSlice } from '~/redux/todosSlice';

function Header() {
    const [todoInput, setTodoInput] = useState('');
    const inputRef = useRef();
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setTodoInput(e.target.value);
    };

    const handleSubmit = (e) => {
        if (e.keyCode === 13) {
            console.log(todoInput);
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
            <input
                className="new-todo"
                ref={inputRef}
                placeholder="What needs to be done?"
                autoFocus
                value={todoInput}
                onChange={handleInput}
                onKeyDown={handleSubmit}
            />
        </header>
    );
}

export default Header;
