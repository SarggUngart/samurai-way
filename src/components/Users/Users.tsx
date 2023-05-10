import React from 'react';
import style from './Users.module.css'
import Button from "../Button/Button";
import {UsersPropsType} from "./UsersContainer";
import {UsersPageType} from "../../redux/stateTypes";
import Pagination from '@mui/material/Pagination';

import axios from "axios";

class Users extends React.Component<UsersPropsType, UsersPageType> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.setTotalUserCountAC(res.data.totalCount)
      })
  }

  onClickSetCurrentPage = (currentPage: number) => {
    // debugger
    this.props.setCurrentPage(currentPage)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
      .then(res => this.props.setUsers(res.data.items))
  }


  render() {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
    let pages: number[] = []

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }


    return (<React.Fragment>
        <div className={style.buttons}>
          <Pagination count={pages.length}
                      onChange={(e, page) => {
                        this.onClickSetCurrentPage(page)
                      }}
                      size="small"
                      color="secondary"
                      variant="outlined" shape="rounded"
          />
        </div>
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

