import React from 'react';
import style from './Messages.module.css'

type MessagesPropsType = {
  id: number
  message: string
}

const Messages: React.FC<MessagesPropsType> = (props) => {
  const {message} = props

  return (
    <div className={style.messages}>
      <div className={style.message}>{message}</div>
    </div>

  );
};

export default Messages;