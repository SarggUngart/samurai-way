import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItemWrapper}>
        <DialogItem id={1} name={'Bob'}/>
        <DialogItem id={2} name={'John'}/>
        <DialogItem id={3} name={'Valter'}/>
        <DialogItem id={4} name={'Sara'}/>
        <DialogItem id={5} name={'Mariya'}/>
      </div>

      <div className={style.MessagesWrapper}>
        <Messages message={'hello'}/>
        <Messages message={'how are you'}/>
        <Messages message={'i get an offer!'}/>
      </div>
    </div>
  );
};


export default Dialogs