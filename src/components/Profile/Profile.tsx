import React from 'react';
import style from './Profile.module.css'
import bg from "../../assets/img/bg_main.jpeg";
import UserInfo from "./UnserInfo/UserInfo";
import Posts from "./Posts/Posts";
import {ProfilePropsType} from "./ProfileContainer";


const Profile: React.FC<ProfilePropsType> = (props) => {
  const {profile} = props

  return (
    <>
      <img className={style.profileBg} src={bg} alt="main_bg"/>
      <UserInfo profile={profile}/>
      <Posts/>
    </>
  );
};

export default Profile;