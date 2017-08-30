import React, { Component } from "react";


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: "" };
    }

    render() {
        return (
            <div>
                <input
                    placeholder={this.props.ph}
                    onChange={e => this.setState({ term: e.target.value })}
                    value={this.state.term}></input>
            </div>
        );
    }
}

export default SearchBar;