import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/Profileinfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../Redux/state";

type PropsType = {
    state: ProfilePageType
    addPost: (posts: string)=> void
}
export const Profile = (props:PropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
)
};