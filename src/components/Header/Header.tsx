import React from 'react';
import logo from '../../assets/img/logo.png';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthUserPropsType} from "./HeaderContainer";

const Header: React.FC<AuthUserPropsType> = (props) => {
  const {isAuth, login} = props

  return (
    <header className={style.header}>
      <img
        src={logo}
        alt='logo'/>
      <div className={style.login}>
        {isAuth
          ?
          <div style={{color:'whitesmoke'}}>{login}</div>
          :
          <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  );
};

export default Header;