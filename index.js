import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyAlMRjqARiYMWf4yxbaJ9Ns8p2LlHn43ks	';


YTSearch({key:API_KEY, term: 'surfboards'}, function (data) {
    console.log(data);

});
// create new component which should produce html
const App = () => {
    return (
        <div>
        <SearchBar/>
    </div>);
};

//take the component's html and put in on the page
ReactDOM.render(<App/>, document.querySelector('.container'));