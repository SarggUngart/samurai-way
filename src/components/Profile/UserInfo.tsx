import React from 'react';
import avatar from '../../assets/img/avatar.jpeg'


const UserInfo = () => {
  return (
    <div>
      <img src={avatar} alt="avatar"/>
      <div>
        <div>name</div>
        <div>Birthday</div>
        <div>City</div>
      </div>
    </div>
  );
};

export default UserInfo;