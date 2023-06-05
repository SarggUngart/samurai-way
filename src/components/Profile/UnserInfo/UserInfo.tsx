import React from 'react';
import style from './UserInfo.module.css'
import {ProfilePropsType} from "../ProfileContainer";


const UserInfo: React.FC<ProfilePropsType> = (props) => {
  const {profile} = props

  return (
    <div className={style.user}>
      <img className={style.avatar} src={profile.photos.large} alt="avatar"/>
      <div className={style.userInfo}>
        <div className={style.userItem}>{profile.fullName}</div>
        <div className={style.userItem}>{profile.aboutMe}</div>
      </div>
    </div>
  );
};

export default UserInfo;