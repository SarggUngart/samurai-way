import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {DialogsDataType, MessagesDataType} from "../../redux/state";

type dialogsPropsType = {
  dialogsData: DialogsDataType[]
  messagesData: MessagesDataType[]
}


const Dialogs:React.FC<dialogsPropsType> = (props) => {
  const {dialogsData, messagesData} = props

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItemWrapper}>
        {dialogsData.map(d =>
          <DialogItem id={d.id} name={d.name}/>
        )}</div>

      <div className={style.MessagesWrapper}>
        {messagesData.map(m =>
          <React.Fragment key={m.id}>
            <Messages id={m.id} message={m.message}/>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};


export default Dialogs