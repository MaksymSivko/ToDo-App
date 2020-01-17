import React, { Component } from 'react';

import './style.css';

export class ItemAddForm extends Component {
    state = {
        label: ''
    };

    onLabelCange = event => {
        this.setState({
            label: event.target.value
        });
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form className="item-add-form" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="What needs to be done"
                    onChange={this.onLabelCange}
                    value={this.state.label}
                />
                <button
                    className="btn btn-outline-secondary"
                    onClick={this.onSubmit}
                >
                    Add Item
                </button>
            </form>
        );
    }
}
