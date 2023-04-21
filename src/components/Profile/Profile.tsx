import React from 'react';
import style from './Profile.module.css'
import bg from "../../assets/img/bg_main.jpeg";
import UserInfo from "./UnserInfo/UserInfo";
import Posts from "./Posts/Posts";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
  state: ProfilePageType
}

const Profile: React.FC<ProfilePropsType> = (props) => {
  const {state} = props
  const profileState = state.profilePostsData

  return (
    <>
      <img className={style.profileBg} src={bg} alt="main_bg"/>
      <UserInfo/>
      <Posts postsData={profileState}/>
    </>
  );
};

export default Profile;