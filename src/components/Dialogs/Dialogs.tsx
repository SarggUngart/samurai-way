import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import Button from "../Button/Button";
import {DialogsPropsType} from "./DialogsContainer";


const Dialogs: React.FC<DialogsPropsType> = (props) => {

  const {
    addDialog,
    updateMessageText,
    dialogsPage,
  } = props

  const onClickNewMessage = () => {
    addDialog()
  }

  const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // debugger
    updateMessageText(e.currentTarget.value)
    console.log(e.currentTarget.value)
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItemWrapper}>
        {dialogsPage.dialogsData.map(d =>
          <DialogItem key={d.id} id={d.id} name={d.name}/>
        )}
      </div>

      <div className={style.MessagesWrapper}>
        {dialogsPage.messagesData.map(m =>
          <Messages key={m.id} id={m.id} message={m.message}/>
        )}
        <div className={style.newMessage}>
          <textarea value={dialogsPage.newMessageText} onChange={onChangeMessage}
                    className={style.text}/>
          <Button name={'add'} callBack={onClickNewMessage}/>
        </div>
      </div>


    </div>
  );
};


export default Dialogs