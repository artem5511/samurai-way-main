import React from 'react';
import './index.css';
import state, {
    addPost,
    DialogsPageType,
    ProfilePageType, renderTree,
    RootStateType,
    subscribe,
    updateNewPostText
} from './Redux/state';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';


export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscribe(renderTree);