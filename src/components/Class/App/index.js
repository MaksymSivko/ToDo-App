import React, { Component } from 'react';

import { AppHeader } from '../../Fun/AppHeader';
import { SearchPanel } from '../SearchPanel';
import { ItemStatusFilter } from '../ItemStatusFilter';
import { TodoList } from '../../Fun/TodoList';
import { ItemAddForm } from '../ItemAddForm';

import './style.css';

export class App extends Component {
    maxId = 100;
    state = {
        todoDate: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Learn React'),
            this.createTodoItem('Build Awesome App')
        ],
        term: '',
        filter: 'all'
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

    toggleProperty(arr, id, propertyName) {
        const indexItem = arr.findIndex(el => el.id === id);
        const oldItem = arr[indexItem];
        const newItem = {
            ...oldItem,
            [propertyName]: !oldItem[propertyName]
        };
        return [
            ...arr.slice(0, indexItem),
            newItem,
            ...arr.slice(indexItem + 1)
        ];
    }

    onToggleImportant = id => {
        this.setState(({ todoDate }) => {
            return {
                todoDate: this.toggleProperty(todoDate, id, 'important')
            };
        });
    };

    onToggleDone = id => {
        this.setState(({ todoDate }) => {
            return {
                todoDate: this.toggleProperty(todoDate, id, 'done')
            };
        });
    };

    onSerchChange = term => {
        this.setState({ term });
    };

    onFilterChange = filter => {
        this.setState({ filter });
    };

    search(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter(item => !item.done);
            case 'done':
                return items.filter(item => item.done);
            default:
                return items;
        }
    }

    render() {
        const { todoDate, term, filter } = this.state;

        const visibleTerm = this.filter(this.search(todoDate, term), filter);

        const doneCount = todoDate.filter(el => el.done).length;
        const dataCount = todoDate.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={dataCount} done={doneCount} />
                <div className="top-panel">
                    <SearchPanel onSerchChange={this.onSerchChange} />
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange}
                    />
                </div>
                <TodoList
                    todos={visibleTerm}
                    onDeleted={this.deletedItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />

                <ItemAddForm onAddItem={this.addItem} />
            </div>
        );
    }
}
