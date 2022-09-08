import React from "react";
import {NavLink} from "react-router-dom";
import s from '../Dialogs.module.css'
import {DialogsType} from "../../../Redux/state";

type DialogItemDialogsType = {
    state: DialogsType
}
export const DialogItem = (props: DialogItemDialogsType) => {
    let path = '/dialog/' + props.state.id;
    return  <div className={s.dialog + '' + s.active}>
        <NavLink to={path}>{props.state.name}</NavLink>
    </div>
}


