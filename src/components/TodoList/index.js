import React from 'react';
import { TodoListItem } from '../TodoListItem';

export const TodoList = () => {
    const items = ['Learn React', 'Build Awesome App'];
    return (
        <ul>
            <li>
                <TodoListItem />
            </li>
            <li>
                <TodoListItem />
            </li>
        </ul>
    );
};
