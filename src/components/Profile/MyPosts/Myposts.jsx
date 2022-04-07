import React from 'react';
import s from './Myposts.module.css';
import {Post} from "../posts/Post";

export const Myposts = () => {
    return <div className={s.mypost}>
        My posts
        <div>
            <textarea>...</textarea>
            <button>Add post</button>
        </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='7'/>
                <Post message='It my first post' likesCount='23'/>
            </div>
        </div>
}