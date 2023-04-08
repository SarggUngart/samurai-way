import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {ActionsType, DialogsPageType} from "../../redux/state";
import Button from "../Button/Button";
import {addMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";

type dialogsPropsType = {
  dialogsState: DialogsPageType
  newMessageText: string
  dispatch: (action: ActionsType) => void
}


const Dialogs: React.FC<dialogsPropsType> = (props) => {
  const {dispatch, newMessageText, dialogsState} = props
  const stateForDialogs = dialogsState.dialogsData
  const stateForMessages = dialogsState.messagesData


  const onClickAddMessageHandler = () => {
    if (newMessageText.length > 0)
      dispatch(addMessageAC())
  }


  const onChangeNewMessageHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateMessageAC(e.currentTarget.value))
  }


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
          <textarea value={newMessageText} onChange={onChangeNewMessageHandler} className={style.text}/>
          <Button name={'add'} callBack={onClickAddMessageHandler}/>
        </div>
      </div>


    </div>
  );
};


export default Dialogs