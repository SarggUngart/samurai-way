import React from 'react';
import ProfileInfo from "./UnserInfo/ProfileInfo";
import ProfilePosts from "./Posts/ProfilePosts";
import {ProfilePropsType} from "./ProfileContainer";

const Profile: React.FC<ProfilePropsType> = (props) => {

  return (
    <>
      <ProfileInfo profile={props.profile}/>
      <ProfilePosts/>
    </>
  );
};

export default Profile;