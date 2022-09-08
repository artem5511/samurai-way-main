import React from "react";
import {NavLink} from "react-router-dom";
import s from '../Dialogs.module.css'

type DialogsItemPropsType = {
    name: string;
    id: any;
}

export const DialogItem = (props: DialogsItemPropsType) => {
    let path = '/dialog/' + props.id;
    return  <div className={s.dialog + '' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


