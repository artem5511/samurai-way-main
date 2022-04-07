import React from 'react';
import s from './Myposts.module.css';
import {Post} from "../posts/Post";

export const Myposts = () => {
    return <div className={s.mypost}>
        My posts
        <div>
            <textarea>...</textarea>
            <button>Add post</button>
<<<<<<< HEAD
        </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='7'/>
                <Post message='It my first post' likesCount='23'/>
                <Post/>
                <Post/>
            </div>
=======
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
>>>>>>> cb41539fb60521531f7b23e7443fb481b9eadb97
    </div>
}