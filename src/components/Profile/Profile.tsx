import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/Profileinfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../Redux/state";


type ProfileProfilePageType = {
    state: ProfilePageType
}

export const Profile = (props:ProfileProfilePageType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} />
        </div>
)
};