const API_KEY = "AIzaSyCeJd6a5vBdgyaBo6lAlrTBpkRSdimt-2A";

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';


class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {videos: []};
        YTSearch({ key: API_KEY, term: "surboards" }, videos => { this.setState({videos}) });
        
    }


    render() {
        return (
            <div>
                <SearchBar ph="Seach..." />
                <VideoList videos={this.state.videos}/>
                
            </div>
        );
    }
}



ReactDOM.render(React.createElement(App), document.querySelector(".container"));