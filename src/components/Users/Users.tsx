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
  setFetchingAC: (isFetching: boolean) => void
  followAC: (id: number, followed: boolean) => void
  unFollowAC: (id: number, followed: boolean) => void
  setFollowingProgressAC: (followingProgress: number | null) => void
  followingProgress: number | null
  totalCount: number
  pageSize: number
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
    currentPage,
    followingProgress,
    setFollowingProgressAC
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
            setFollowingProgressAC(user.id)
            UsersAPI.followUser(user.id)
              .then(data => {
                if (data.resultCode === 0) {
                  followAC(user.id, user.followed)
                  setFollowingProgressAC(null)
                }
              })
          }

          const onClickUnfollowUser = () => {
            setFollowingProgressAC(user.id)
            UsersAPI.unFollowUser(user.id)
              .then(() => {
                unFollowAC(user.id, user.followed)
                setFollowingProgressAC(null)
              })
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
                      <div className={style.name}>{user.id}</div>
                    </NavLink>
                  </div>
                </div>
                {user.followed
                  ?
                  <Button disabled={followingProgress === user.id} name={isFollow} callBack={onClickUnfollowUser}/>
                  :
                  <Button disabled={followingProgress === user.id} name={isFollow} callBack={onClickFollowUser}/>
                }
              </div>
            </React.Fragment>
          )
        }
      )
      }
    </React.Fragment>
  )
}






