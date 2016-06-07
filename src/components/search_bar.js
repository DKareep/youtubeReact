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
            <div className="input-container">
                <input
                    value = {this.state.value}
                    onChange={event =>  this.onChangeEvent(event.target.value)} />
            </div>
        );
    }
    onChangeEvent(term) {
        "use strict";
        this.setState({term: term});
        this.props.onSearchTermChange(term);
    }
}
export default SearchBar;
