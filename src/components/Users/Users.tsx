import React from 'react';
import style from './Users.module.css'
import Button from "../Button/Button";
import {UsersPropsType} from "./UsersContainer";
import {UsersPageType} from "../../redux/stateTypes";
import axios from "axios";


class Users extends React.Component<UsersPropsType, UsersPageType> {


  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(res => this.props.setUsers(res.data.items))
  }


  render() {
    return (<React.Fragment>
        {this.props.usersPage.usersData.map(user => {
          const onClickFollowUser = () => {
            this.props.followed(user.id, user.followed)
          }
          const isFollow = !user.followed ? 'follow' : 'unfollow'

          return (
            <div key={user.id} className={style.wrapper}>
              <div className={style.userItem}>
                <img className={style.img} src={user.photos.large} alt="friend_avatar"/>
                <div className={style.userInfo}>
                  <div className={style.name}>{user.name}</div>
                </div>
              </div>
              <Button name={isFollow} callBack={onClickFollowUser}/>
            </div>
          )
        })}
      </React.Fragment>

    )
  }
}

export default Users;

