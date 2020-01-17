import React, { Component } from 'react';

import './style.css';

export default class ItemAddForm extends Component {
    render() {
        const { onAddItem } = this.props;

        return (
            <div className="item-add-form">
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => onAddItem('Hi')}
                >
                    Add Item
                </button>
            </div>
        );
    }
}
