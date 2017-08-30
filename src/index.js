const API_KEY = "AIzaSyCeJd6a5vBdgyaBo6lAlrTBpkRSdimt-2A";

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.videoSearch("cats");
        this.state = {
            videos: [],
            selectedVideo: null
        };

    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, videos => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            })
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} placeholder="Seach..." />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                />

            </div>
        );
    }
}



ReactDOM.render(React.createElement(App), document.querySelector(".container"));