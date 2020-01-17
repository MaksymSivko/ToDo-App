import React, { Component } from 'react';

export class SearchPanel extends Component {
    state = {
        term: ''
    };

    onSerchChange = event => {
        const term = event.target.value;
        this.setState({ term });
        this.props.onSerchChange(term);
    };

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Search"
                value={this.state.term}
                onChange={this.onSerchChange}
            />
        );
    }
}
