import React from 'react';
import s from './Profile.module.css';
import {Myposts} from './MyPosts/Myposts';

type ProfilePropsType = {
}

export const Profile = (props: ProfilePropsType) => {
    return <div>
        <img src='http://wallpapers-image.ru/1920x1080/aircraft/wallpapers/wallpapers-aircraft-39.jpg'/>
        <div>ava+description</div>
        <Myposts/>
    </div>;
};