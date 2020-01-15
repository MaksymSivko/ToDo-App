import React from 'react';

import './style.css';

export const AppHeader = ({ toDo, done }) => {
    return (
        <div className="app-header">
            <h1>ToDo List</h1>
            <h2>
                {toDo} moreto do, {done} done
            </h2>
        </div>
    );
};
