import React, { Component } from 'react';

import { AppHeader } from '../../Fun/AppHeader';
import { SearchPanel } from '../../Fun/SearchPanel';
// import { ItemStatusFilter } from '../ItemStatusFilter';
import { ItemStatusFilterClass } from '../ItemStatusFilterClass';
import { TodoList } from '../../Fun/TodoList';

import './style.css';

export class AppClass extends Component {
    state = {
        todoDate: [
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'Learn React', important: true, id: 2 },
            { label: 'Build Awesome App', important: false, id: 3 }
        ]
    };

    deletedItem = id => {
        this.setState(({ todoDate }) => {
            const indexItem = todoDate.findIndex(el => el.id === id);
            const newTodoDate = [
                ...todoDate.slice(0, indexItem),
                ...todoDate.slice(indexItem + 1)
            ];

            return {
                todoDate: newTodoDate
            };
        });
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel">
                    <SearchPanel />
                    {/* <ItemStatusFilter /> */}
                    <ItemStatusFilterClass />
                </div>
                <TodoList
                    todos={this.state.todoDate}
                    onDeleted={this.deletedItem}
                />
            </div>
        );
    }
}
