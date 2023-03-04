import React from 'react';
import avatar from '../../../assets/img/avatar.jpeg'
import style from './UserInfo.module.css'


const UserInfo = () => {
  return (
    <div className={style.user}>
      <img className={style.avatar} src={avatar} alt="avatar"/>
      <div className={style.userInfo}>
        <div className={style.userItem}>Name</div>
        <div className={style.userItem}>Birthday</div>
        <div className={style.userItem}>City</div>
      </div>
    </div>
  );
};

export default UserInfo;