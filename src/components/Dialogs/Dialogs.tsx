import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import Button from "../Button/Button";
import {DialogsPropsType} from "./DialogsContainer";


const Dialogs: React.FC<DialogsPropsType> = (props) => {

  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  function adjustHeight() {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const height = Math.min(textareaRef.current.scrollHeight, 200);
      textareaRef.current.style.height = `${height}px`;
    }
  }

  const {
    addMessageAC,
    updateMessageAC,
    dialogsPage,
  } = props

  const onClickNewMessage = () => {
    if (!dialogsPage.newMessageText) return
    addMessageAC()
    if (textareaRef.current)
      textareaRef.current.style.height = `auto`
  }

  const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateMessageAC(e.currentTarget.value)
    adjustHeight();
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
          <textarea
            ref={textareaRef}
            value={dialogsPage.newMessageText}
            onChange={onChangeMessage}
            className={style.text}
          />
          <Button name={'add'} callBack={onClickNewMessage}/>
        </div>
      </div>
    </div>
  );
};


export default Dialogs