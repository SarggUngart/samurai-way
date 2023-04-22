import React from 'react';
import style from './Button.module.css'

type BtnPropsType = {
  name: string
  callBack: () => void
}

const Button: React.FC<BtnPropsType> = (props) => {
  const {name, callBack} = props


  return (
    <div>
      <button onClick={callBack} className={style.btn}>{name}</button>
    </div>

  );
};

export default Button;