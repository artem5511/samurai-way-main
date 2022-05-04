import React from 'react';
import s from './Profile.module.css';
import {Myposts} from './MyPosts/Myposts';

export const Profile = () => {
    return <div className='content'>
        <img src='http://wallpapers-image.ru/1920x1080/aircraft/wallpapers/wallpapers-aircraft-39.jpg'/>
        <div>ava+description</div>
        <Myposts/>
    </div>;
};