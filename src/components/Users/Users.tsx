import React from 'react';
import style from './Users.module.css'
import Button from "../Button/Button";
import Pagination from '@mui/material/Pagination';
import {UsersPageType} from "../../redux/stateTypes";
import {NavLink} from "react-router-dom";
import emptyAvatar from "../../assets/img/avatar_empty.jpeg";
import {UsersAPI} from "../../api/api";

type UsersClearPropsType = {
  onClickSetCurrentPage: (page: number) => void
  totalCount: number
  pageSize: number
  followAC: (id: number, followed: boolean) => void
  unFollowAC: (id: number, followed: boolean) => void
  usersPage: UsersPageType
  currentPage: number
}

export const Users: React.FC<UsersClearPropsType> = (props) => {
  const {
    onClickSetCurrentPage,
    followAC,
    unFollowAC,
    totalCount,
    pageSize,
    usersPage,
    currentPage

  } = props

  let pagesCount = Math.ceil(totalCount / pageSize)
  let pages: number[] = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <React.Fragment>
      <div className={style.buttons}>
        <Pagination
          count={pages.length}
          onChange={(e, page) => {
            onClickSetCurrentPage(page)
          }}
          size="small"
          color="secondary"
          variant="outlined"
          shape="rounded"
          page={currentPage}
        />
      </div>
      {usersPage.usersData.map(user => {

        const onClickFollowUser = () => {
          UsersAPI.followUser(user.id)
            .then(data => {
              if (data.resultCode === 0) {
                followAC(user.id, user.followed)
              }
            })
        }
        const onClickUnfollowUser = () => {
          UsersAPI.unFollowUser(user.id)
            .then(() => unFollowAC(user.id, user.followed))
        }

        const isFollow = user.followed ? 'unfollow' : 'follow'
        return (
          <React.Fragment key={user.id}>
            <div className={style.wrapper}>
              <div className={style.userItem}>
                <img className={style.img} src={user.photos.large || emptyAvatar}/>
                <div className={style.userInfo}>
                  <NavLink className={style.link} to={`/profile/${user.id}`}>
                    <div className={style.name}>{user.name}</div>
                  </NavLink>
                </div>
              </div>
              {user.followed
                ?
                <Button name={isFollow} callBack={onClickUnfollowUser}/>
                :
                <Button name={isFollow} callBack={onClickFollowUser}/>
              }
            </div>
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}






