import React from 'react';
import style from './Profile.module.css'
import bg from "../../assets/img/bg_main.jpeg";
import UserInfo from "./UnserInfo/UserInfo";
import Posts from "./Posts/Posts";
import {postsDataType} from "../../redux/state";

type ProfilePropsType = {
  profileState: postsDataType[]
  addPost: (postText: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
  const {profileState,addPost} = props

  return (
    <>
      <img className={style.profileBg} src={bg} alt="main_bg"/>
      <UserInfo/>
      <Posts postsData={profileState} addPost={addPost}/>
    </>
  );
};

export default Profile;