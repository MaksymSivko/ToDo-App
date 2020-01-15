import React from 'react';
import ReactDOM from 'react-dom';

import { TodoList } from './components/TodoList';
import { AppHeader } from './components/AppHeader';
import { SearchPanel } from './components/SearchPanel';
import { ItemStatusFilter } from './components/ItemStatusFilter';

import './style.css';

const App = () => {
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

ReactDOM.render(<App />, document.getElementById('root'));
