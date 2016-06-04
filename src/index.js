import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//  npm install --save youtube-api-search
import SearchBar from './components/search_bar'


const API_KEY = "AIzaSyAiz--wlZwLBIGMJhd2qQuSH5L4jvZeDcE";

class App extends Component {
    constructor(props) {
        "use strict";
        super(props);
        this.state = {
            videos: []
        };
        YTSearch({
                key: API_KEY,
                term: 'Budha bar'
            },
            videos => {
                "use strict";
                this.setState({videos});
            }
        );
    }

    render() {
        return (  <div>
            <SearchBar />
        </div>)
    }

;
}
;

ReactDOM.render(<App />, document.getElementById('container'));