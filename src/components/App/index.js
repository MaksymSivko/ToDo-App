import React from 'react';

import { AppHeader } from '../AppHeader';
import { SearchPanel } from '../SearchPanel';
import { ItemStatusFilter } from '../ItemStatusFilter';
import { TodoList } from '../TodoList';

import './style.css';

export const App = () => {
    const todoDate = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Learn React', important: true, id: 2 },
        { label: 'Build Awesome App', important: false, id: 3 }
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoDate} />
        </div>
    );
};
