import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {DialogsDataType, MessagesDataType} from "../../redux/state";
import Button from "../Button/Button";

type dialogsPropsType = {
  addMessage: () => void
  updateMessageText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  stateForDialogs: DialogsDataType[]
  stateForMessages: MessagesDataType[]
  message: string
}


const Dialogs: React.FC<dialogsPropsType> = (props) => {

  const {
    addMessage,
    updateMessageText,
    stateForDialogs,
    stateForMessages,
    message
  } = props


  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItemWrapper}>
        {stateForDialogs.map(d =>
          <DialogItem key={d.id} id={d.id} name={d.name}/>
        )}
      </div>

      <div className={style.MessagesWrapper}>
        {stateForMessages.map(m =>
          <Messages key={m.id} id={m.id} message={m.message}/>
        )}
        <div className={style.newMessage}>
          <textarea value={message} onChange={updateMessageText}
                    className={style.text}/>
          <Button name={'add'} callBack={addMessage}/>
        </div>
      </div>


    </div>
  );
};


export default Dialogs