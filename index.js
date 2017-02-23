import _ from 'lodash';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list';
import VideoDtail from './components/video_detail';
const API_KEY = 'AIzaSyAlMRjqARiYMWf4yxbaJ9Ns8p2LlHn43ks';


// create new component which should produce html
class App extends Component {
    constructor(props) {

        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards')
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos_data) => {
            console.log(videos_data);
            this.setState({
                videos: videos_data,
                selectedVideo: videos_data[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDtail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos}/>
            </div>
        );
    }

}


//take the component's html and put in on the page
ReactDOM.render(<App/>, document.querySelector('.container'));