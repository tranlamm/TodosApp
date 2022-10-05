import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { editingSelector, todosRemainSelector } from '~/redux/selectors';
import { todosSlice } from '~/redux/slice/todosSlice';

function Main() {
    const [editValue, setEditValue] = useState('');
    const todos = useSelector(todosRemainSelector);
    const editId = useSelector(editingSelector);
    const dispatch = useDispatch();

    const handleEditValue = (e) => {
        setEditValue(e.target.value);
    };

    const handleToggleCheck = (id) => {
        dispatch(todosSlice.actions.toggleTodo({ id: id }));
    };

    const handleDelete = (id) => {
        dispatch(todosSlice.actions.delete({ id: id }));
    };

    const handleStartEditing = (id) => {
        dispatch(todosSlice.actions.setEditId({ id: id }));
    };

    const handleSubmitEditing = (e) => {
        if (e.keyCode === 13) {
            dispatch(
                todosSlice.actions.submitEditing({
                    value: editValue,
                }),
            );
            handleCancelEditing();
            setEditValue('');
        } else if (e.keyCode === 27) {
            handleCancelEditing();
        }
    };

    const handleCancelEditing = () => {
        dispatch(todosSlice.actions.setEditId({ id: '' }));
    };

    const handleToggleAll = () => {
        dispatch(todosSlice.actions.toggleAll());
    };

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" onClick={handleToggleAll} />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {/* <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}
                {todos.map((todo, index) => (
                    <li
                        key={todo.id}
                        className={classNames({
                            editing: todo.id === editId,
                            completed: todo.completed,
                        })}
                    >
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                onChange={() => handleToggleCheck(todo.id)}
                                checked={todo.completed}
                            />
                            <label onDoubleClick={() => handleStartEditing(todo.id)}>{todo.name}</label>
                            <button className="destroy" onClick={() => handleDelete(todo.id)}></button>
                        </div>
                        <input
                            className="edit"
                            value={editValue}
                            onChange={handleEditValue}
                            onBlur={handleCancelEditing}
                            onKeyDown={handleSubmitEditing}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Main;
