import React from 'react';
import style from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
  id: number
  name: string
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
  const {id, name} = props

  let path = '/dialogs/' + id

  return (
    <ul className={style.dialogItem}>
      <li>
        <NavLink className={style.dialog}  to={path}>{name}</NavLink>
      </li>
    </ul>
  );
};

export default DialogItem;