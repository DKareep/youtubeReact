import React from 'react';
import ReactDOM from 'react-dom';
//  npm install --save youtube-api-search
import SearchBar from './components/search_bar'

const API_KEY = "AIzaSyAiz--wlZwLBIGMJhd2qQuSH5L4jvZeDcE";
const App = () => {
    "use strict";
    return (
        <div>
        <SearchBar />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('container'));