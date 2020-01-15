import React from 'react';
import { TodoListItem } from '../TodoListItem';

export const TodoList = () => {
    return (
        <ul>
            <li>
                <TodoListItem label="Drink Coffee" />
            </li>
            <li>
                <TodoListItem important label="Learn React" />
            </li>
            <li>
                <TodoListItem label="Build Awesome App" />
            </li>
        </ul>
    );
};
