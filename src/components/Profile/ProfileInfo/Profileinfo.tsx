import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfilePageType} from "../../../Redux/state";


export const ProfileInfo = () => {
        return (
            <div>
                <div>
                    <img src='https://cdn.pixabay.com/photo/2017/06/16/02/44/panorama-2407493__340.jpg'/>
                </div>
                <div className={s.descriptionBlock}>
                    ava+description
                </div>
            </div>
    )
};