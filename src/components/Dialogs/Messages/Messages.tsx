import React from "react";
import {NavLink} from "react-router-dom";
import s from '../Dialogs.module.css'


type MessagesPropsType = {
    message: string;
}

export const Messages =(props: MessagesPropsType) => {
    return  <div className={s.message}>{props.message}</div>
}
