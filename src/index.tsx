import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import store, {StoreType} from './Redux/state';


export let rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>,
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store);

// subscribe(renderTree);