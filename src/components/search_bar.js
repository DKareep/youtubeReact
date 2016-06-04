import React, {Component} from 'react';
// const Component = React.Component;
class SearchBar extends Component {
    constructor (props) {
        "use strict";
        super(props);
        this.state = {term: ''}
    }
    render() {
        "use strict";
        return (
            <div>
                <input
                    value = {this.state.value}
                    onChange={(event) => this.setState({term: event.target.value})} />
                value of input : {this.state.term}
            </div>
        );
    }
}
export default SearchBar;
