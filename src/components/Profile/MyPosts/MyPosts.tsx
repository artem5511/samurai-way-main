import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "../posts/Post";

export const MyPosts = (props: { posts: any[]; }) => {
    // let posts = [
    //     {id: 1, message: 'Hi, how are you?', likesCount: 7},
    //     {id: 2, message: 'It my first post', likesCount: 17},
    //     {id: 2, message: 'WTF?', likesCount: 117}
    // ]

    let postsElements =
        props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea>...</textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
}