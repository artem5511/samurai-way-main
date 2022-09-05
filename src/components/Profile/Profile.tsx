import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/Profileinfo";
import {MyPosts} from "./MyPosts/MyPosts";


type ProfilePropsType = {
}

export const Profile = (props: { posts: any[]; }) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} />
        </div>
)
};