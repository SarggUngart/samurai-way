import React from 'react';
import ProfileInfo from "./UnserInfo/ProfileInfo";
import ProfilePosts from "./Posts/ProfilePosts";
import {ProfilePropsType} from "./ProfileContainer";


const Profile: React.FC<ProfilePropsType> = ({profile, status, changeProfileStatusTC}) => {

  return (
    <>
      <ProfileInfo profile={profile} status={status} changeProfileStatusTC={changeProfileStatusTC}/>
      <ProfilePosts/>
    </>
  );
};

export default Profile;