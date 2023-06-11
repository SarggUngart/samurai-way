import React from 'react';
import style from './Profile.module.css'
import bg from "../../assets/img/bg_main.jpeg";
import ProfileInfo from "./UnserInfo/ProfileInfo";
import ProfilePosts from "./Posts/ProfilePosts";
import {ProfilePropsType} from "./ProfileContainer";


const Profile: React.FC<ProfilePropsType> = (props) => {

  return (
    <>
      <img className={style.profileBg} src={bg} alt="main_bg"/>
      <ProfileInfo profile={props.profile}/>
      <ProfilePosts/>
    </>
  );
};

export default Profile;