import React from 'react';
import logo from '../../assets/img/logo.png';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthUserPropsType} from "./HeaderContainer";
import {useAppDispatch} from "../../redux/redux-store";
import {logOutTC} from "../../redux/auth-reducer";


const Header: React.FC<AuthUserPropsType> = (props) => {
  const {isAuth, login} = props
  const dispatch = useAppDispatch();


  const logOutHandler = () => {
    dispatch(logOutTC())
  }


  return (
    <header className={style.header}>
      <img
        src={logo}
        alt='logo'/>
      <div className={style.login}>
        {isAuth
          ?
          <>
            <div style={{color: 'whitesmoke', marginBottom: '5px'}}>{login}</div>
            <NavLink onClick={logOutHandler} to={'/login'}>logout</NavLink>
          </>
          :
          <span style={{color: 'whitesmoke'}}>you are not authorised</span>
        }
      </div>
    </header>
  );
};

export default Header;