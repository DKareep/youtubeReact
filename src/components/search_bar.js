import React, {Component} from 'react';
// const Component = React.Component;
class SearchBar extends Component {
    render() {
        "use strict";
        return <input onChange={(event) => {console.log(event)}} />;
    }
}
export default SearchBar;
