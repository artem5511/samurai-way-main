import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, DialogsPageType, ProfilePageType} from "./Redux/state"
import {BrowserRouter} from 'react-router-dom';

export let rerenderEntireTree = (state: { dialogsPage: DialogsPageType; profilePage: ProfilePageType; }) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>,
        </BrowserRouter>, document.getElementById('root')
);
}