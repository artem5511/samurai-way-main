import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "../posts/Post";
import {PostsType, ProfilePageType, updateNewPostText} from "../../../Redux/state";

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string)=> void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    // let posts = [
    //     {id: 1, message: 'Hi, how are you?', likesCount: 7},
    //     {id: 2, message: 'It my first post', likesCount: 17},
    //     {id: 2, message: 'WTF?', likesCount: 117}
    // ]

    let postsElements =
        props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    // let newPostElement = React.createRef<HTMLTextAreaElement>(null);

    const newPostElement = React.useRef<HTMLTextAreaElement>('');

    let addPost = () => {
        // let text = newPostElement.current.value;
        props.addPost('')
    }

let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
}
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
}