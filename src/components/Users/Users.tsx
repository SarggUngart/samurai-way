import React from 'react';
import style from './Users.module.css'

import Button from "../Button/Button";
import {UsersPropsType} from "./UsersContainer";


const Users: React.FC<UsersPropsType> = (props) => {


  return (<React.Fragment>
      {props.usersPage.usersData.map(user => {
        const onClickFollowUser = () => {
          props.follow(user.id, user.follow)
        }
        const ifFollow = !user.follow ? 'follow' : 'unfollow'

        return (
          <div key={user.id} className={style.wrapper}>
            <div className={style.userItem}>
              <img className={style.img} src={user.avatar} alt="friend_avatar"/>
              <div className={style.userInfo}>
                <div className={style.name}>{user.name}</div>
                <div className={style.age}><b>age:</b> {user.age}</div>
                <div className={style.status}><b>status:</b> {user.status}</div>
                <div className={style.location}><b>location:</b> <span>{user.location.city}</span>
                  <span> {user.location.country}</span>
                </div>
              </div>
            </div>
            <Button name={ifFollow} callBack={onClickFollowUser}/>
          </div>
        )
      })}
    </React.Fragment>
  );
};

export default Users;