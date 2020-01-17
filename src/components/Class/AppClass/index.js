import React, { Component } from 'react';

import { AppHeader } from '../../Fun/AppHeader';
import { SearchPanel } from '../../Fun/SearchPanel';
// import { ItemStatusFilter } from '../ItemStatusFilter';
import { ItemStatusFilterClass } from '../ItemStatusFilterClass';
import { TodoList } from '../../Fun/TodoList';

import './style.css';
import ItemAddForm from '../ItemAddForm';

export class AppClass extends Component {
    maxId = 100;
    state = {
        todoDate: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Learn React'),
            this.createTodoItem('Build Awesome App')
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        };
    }

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

    addItem = text => {
        this.setState(({ todoDate }) => {
            const newArr = [...todoDate, this.createTodoItem(text)];

            return {
                todoDate: newArr
            };
        });
    };

    onToggleImportant = id => {
        console.log('Important', id);
    };

    onToggleDone = id => {
        console.log('Done', id);
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel">
                    <SearchPanel />
                    <ItemStatusFilterClass />
                </div>
                <TodoList
                    todos={this.state.todoDate}
                    onDeleted={this.deletedItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />

                <ItemAddForm onAddItem={this.addItem} />
            </div>
        );
    }
}
