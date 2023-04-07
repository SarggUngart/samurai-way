import React from 'react';
import style from './Profile.module.css'
import bg from "../../assets/img/bg_main.jpeg";
import UserInfo from "./UnserInfo/UserInfo";
import Posts from "./Posts/Posts";
import {ActionsType, PostsDataType} from "../../redux/state";

type ProfilePropsType = {
  profileState: PostsDataType[]
  newPostText: string
  dispatch:(action:ActionsType)=>void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
  const {profileState,newPostText,dispatch} = props

  return (
    <>
      <img className={style.profileBg} src={bg} alt="main_bg"/>
      <UserInfo/>
      <Posts postsData={profileState} newPostText={newPostText} dispatch={dispatch}/>
    </>
  );
};

export default Profile;