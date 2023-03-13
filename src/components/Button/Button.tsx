import React from 'react';
import style from './Button.module.css'

type BtnPropsType = {
  name: string
  callBack: () => void
}

const Button: React.FC<BtnPropsType> = (props) => {
  const {name, callBack} = props


  const onClickBtnHandler = () => {
    callBack()
  }

  return (
    <button onClick={onClickBtnHandler} className={style.btn}>{name}</button>
  );
};

export default Button;