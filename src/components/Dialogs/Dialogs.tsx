import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";


export  const Dialogs = (props: { state: { dialogs: any[]; messages: any[]; }; }) => {

    let dialogsElements = props.state.dialogs.map (dialog => <DialogItem name={dialog.name} id={dialog.id}/> );
    let messagesElements = props.state.messages.map(message => <Messages message={message.message}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            {/*    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
            {/*    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
            {/*    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>*/}
            {/*    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>*/}
            {/*    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>*/}
            {/*    <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>*/}
            </div>
            <div className={s.messages}>
                {messagesElements}
            {/*    <Messages message={messageData[0].message} id={messageData[0].id}/>*/}
            {/*    <Messages message={messageData[1].message} id={messageData[1].id}/>*/}
            {/*    <Messages message={messageData[2].message} id={messageData[2].id}/>*/}
            {/*    <Messages message={messageData[3].message} id={messageData[3].id}/>*/}
            {/*    <Messages message={messageData[4].message} id={messageData[4].id}/>*/}
            {/*    <Messages message={messageData[5].message} id={messageData[5].id}/>*/}
            </div>
        </div>
    )
  };