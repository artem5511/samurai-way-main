import React from "react";
import {NavLink} from "react-router-dom";
import s from '../Dialogs.module.css'

type MessageType = {
    message: string;
}

export const Messages =(props: MessageType) => {
    return  <div className={s.message}>{props.message}</div>
}
