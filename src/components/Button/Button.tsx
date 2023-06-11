import React from 'react';
import style from './Button.module.css'

type BtnPropsType = {
  name: string
  callBack: () => void
  disabled?: boolean
}

const Button: React.FC<BtnPropsType> = (props) => {
  const {name, callBack, disabled} = props


  return (
    <div>
      <button disabled={disabled} onClick={callBack} className={style.btn}>{name}</button>
    </div>

  );
};

export default Button;