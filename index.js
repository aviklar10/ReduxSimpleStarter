import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
//
// import App from './components/app';
// import reducers from './reducers';
//
// const createStoreWithMiddleware = applyMiddleware()(createStore);
//
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));

const API_KEY = 'AIzaSyDNupdkr66H6vQBT4VTkU2HPHyfYkTazcM';

// create new component which should produce html
const App = () => {
    return (
        <div>
        <SearchBar/>
    </div>);
};

//take the component's html and put in on the page
ReactDOM.render(<App/>, document.querySelector('.container'));