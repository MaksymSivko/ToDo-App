import React from 'react';
// import { TodoListItem } from '../TodoListItem';
import { TodoListItem } from '../../Fun/TodoListItem';

import './style.css';

export const TodoList = ({
    todos,
    onDeleted,
    onToggleDone,
    onToggleImportant
}) => {
    const elements = todos.map(item => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                {/* <TodoListItem {...itemProps} /> */}
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                />
            </li>
        );
    });

    return <ul className="list-group todo-list">{elements}</ul>;
};
