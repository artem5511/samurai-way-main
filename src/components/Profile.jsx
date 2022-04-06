import React from 'react';
import s from './Profile.module.css';

export const Profile = () => {
    return <div className={s.content}>
        <img src='http://wallpapers-image.ru/1920x1080/aircraft/wallpapers/wallpapers-aircraft-39.jpg'/>
        <div>ava+description</div>
        <div>
            My post
            <div className={s.posts}>
                New post
                <div>
                    <div className={s.item}>
                        post1
                    </div>
                    <div className={s.item}>
                        post2
                    </div>
                </div>
            </div>
        </div>
    </div>
}