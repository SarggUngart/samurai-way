import React from 'react';
import style from './Profile.module.css'
import bg from "../../assets/img/bg_main.jpeg";
import UserInfo from "./UnserInfo/UserInfo";
import Posts from "./Posts/Posts";
import {StoreType} from "../../redux/state";
import {ReducersRootState} from "../../redux/redux-store";

type ProfilePropsType = {
  state: ReducersRootState
  store: StoreType
}

const Profile: React.FC<ProfilePropsType> = (props) => {
  const {state, store} = props
  const profileState = state.profileReducer.profilePostsData
  const newPostText = state.profileReducer.newPostText

  return (
    <>
      <img className={style.profileBg} src={bg} alt="main_bg"/>
      <UserInfo/>
      <Posts postsData={profileState} newPostText={newPostText} store={store}/>
    </>
  );
};

export default Profile;