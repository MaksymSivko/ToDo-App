import React from 'react';
// import { TodoListItem } from '../TodoListItem';
import { TodoListItemClass } from '../../Class/TodoListItemClass';

import './style.css';

export const TodoList = ({ todos, onDeleted }) => {
    const elements = todos.map(item => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                {/* <TodoListItem {...itemProps} /> */}
                <TodoListItemClass
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                />
            </li>
        );
    });

    return <ul className="list-group todo-list">{elements}</ul>;
};
