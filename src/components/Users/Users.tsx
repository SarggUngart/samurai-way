import React from 'react';
import style from './Users.module.css'
import Button from "../Button/Button";
import Pagination from '@mui/material/Pagination';
import {UsersPageType} from "../../redux/stateTypes";

type UsersClearPropsType = {
  onClickSetCurrentPage: (page: number) => void
  totalCount: number
  pageSize: number
  followed: (id: number, followed: boolean) => void
  usersPage: UsersPageType

}

export const Users: React.FC<UsersClearPropsType> = (props) => {
  const {
    onClickSetCurrentPage,
    followed,
    totalCount,
    pageSize,
    usersPage,

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
          variant="outlined" shape="rounded"
        />
      </div>
      {usersPage.usersData.map(user => {
        const onClickFollowUser = () => {
          followed(user.id, user.followed)
        }
        const isFollow = !user.followed ? 'follow' : 'unfollow'
        return (
          <React.Fragment key={user.id}>
            <div className={style.wrapper}>
              <div className={style.userItem}>
                <img className={style.img} src={user.photos.large} alt="friend_avatar"/>
                <div className={style.userInfo}>
                  <div className={style.name}>{user.name}</div>
                </div>
              </div>
              <Button name={isFollow} callBack={onClickFollowUser}/>
            </div>
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}






