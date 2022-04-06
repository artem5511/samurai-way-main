import React from 'react';
import s from './Myposts.module.css';
import {Post} from "../posts/Post";

export const Myposts = () => {
    return <div className={s.mypost}>
        My posts
        <div>
            <textarea>...</textarea>
            <button>Add post</button>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>
}