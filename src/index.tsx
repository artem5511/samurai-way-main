import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let messages = [
    {id: 1, message: 'HI'},
    {id: 2, message: 'How are You?'},
    {id: 3, message: 'Yo Yo'},
    {id: 4, message: 'How is your kamasutra?'},
    {id: 5, message: 'Yo YO YO'},
    {id: 6, message: 'How is the weather?'}
]
let dialogs = [
    {id: 1, name: 'Nata'},
    {id: 2, name: 'Vera'},
    {id: 3, name: 'Eva'},
    {id: 4, name: 'Dimych'},
    {id: 5, name: 'Artur'},
    {id: 6, name: 'Roman'}
    ]
let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 7},
    {id: 2, message: 'It my first post', likesCount: 17},
    {id: 2, message: 'WTF?', likesCount: 117}
    ]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);