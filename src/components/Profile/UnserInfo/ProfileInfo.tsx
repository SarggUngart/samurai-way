import React from 'react';
import style from './UserInfo.module.css'
import {CircularProgress} from "@mui/material";
import Status from "./Status";
import {ProfileType} from "../../../redux/stateTypes";

type ProfileInfoPropsType = {
  profile: ProfileType
  status: string
  changeProfileStatusTC: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
  const {profile, status,changeProfileStatusTC} = props

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
          <div className={style.userItem}><h4 style={{margin: '0'}}>Обо мне</h4> {profile.aboutMe}</div>
          <Status status={status} changeProfileStatusTC={changeProfileStatusTC}/>
        </div>
      </div>
    );
  }

};

export default ProfileInfo;