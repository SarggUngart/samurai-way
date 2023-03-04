import React from 'react';
import bg from "../../assets/img/bg_main.jpeg";
import UserInfo from "./UnserInfo/UserInfo";
import Posts from "./Posts/Posts";


const Profile = () => {
  return (
    <div className={'main'}>
      <img src={bg} alt="main_bg"/>
      <UserInfo/>
      <Posts/>
    </div>
  );
};

export default Profile;