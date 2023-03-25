import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";

type dialogsDataType = {
  id: number
  name: string
}

type messagesDataType = {
  id: number
  message: string
}

const dialogsData: dialogsDataType[] = [
  {id: 1, name: 'Bob'},
  {id: 2, name: 'Andrew'},
  {id: 3, name: 'Serj'},
  {id: 4, name: 'Marina'},
  {id: 5, name: 'Sveta'}
]

const messagesData: messagesDataType[] = [
  {id: 1, message: 'hello'},
  {id: 2, message: 'how are you'},
  {id: 3, message: 'i get an offer'},
]


const Dialogs = () => {
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