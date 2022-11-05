import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/Profileinfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../Redux/state";

type PropsType = {
    profilePage: ProfilePageType
    addPost: (posts: string)=> void
}
export const Profile = (props:PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}/>
        </div>
)
};