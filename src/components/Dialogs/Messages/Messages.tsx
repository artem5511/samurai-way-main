import React from "react";
import {NavLink} from "react-router-dom";
import s from '../Dialogs.module.css'
import {MessageType} from "../../../Redux/state";

type MessagesMessageType = {
    state: MessageType
}
export const Messages =(props: MessagesMessageType) => {
    return  <div className={s.message}>{props.state.message}</div>
}
