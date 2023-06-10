import React from 'react';
import style from './UserInfo.module.css'
import {ProfileType} from "../../../redux/stateTypes";
import {CircularProgress} from "@mui/material";


type UserInfoPropsType = {
  profile: ProfileType
}


const ProfileInfo: React.FC<UserInfoPropsType> = (props) => {
  const {profile} = props


  if (!profile.photos) {
    return <CircularProgress
      sx={{margin: 'auto'}}
      color="secondary"/>
  } else {
    return (
      <div className={style.user}>
        <img className={style.avatar} src={profile.photos.large} alt="avatar"/>
        <div className={style.userInfo}>
          <div className={style.userItem}><h4 style={{margin: '0'}}>Имя</h4> {profile.fullName}</div>
          <div className={style.userItem}><h4 style={{margin: '0'}}>Статус</h4>  {profile.aboutMe}</div>
        </div>
      </div>
    );
  }

};

export default ProfileInfo;