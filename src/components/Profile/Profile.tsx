import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/Profileinfo";
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = (props: { state: { posts: any[]; }; }) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} />
        </div>
)
};