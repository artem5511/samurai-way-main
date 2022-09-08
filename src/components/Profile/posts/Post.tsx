import React from 'react';
import s from './Post.module.css';

type PostPostsType = {
    message: string,
    likesCount: number
}

export const Post = (props: PostPostsType ) => {
    return <div className={s.item}>
        <img
            src='https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg'/>
        {props.message}
        <div>
            <span>like</span>{props.likesCount}

            {/*<div className={s.item}>*/}
            {/*    <img*/}
            {/*        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDC6pGb_Gmv6tYDvvMgW9qQAPaoXXNmxLCtw&usqp=CAU'/>*/}
            {/*    post1*/}
            {/*    <div>*/}
            {/*        <span>Like</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    </div>
}