import React from 'react';
import style from './Users.module.css'
import Button from "../Button/Button";
import {UsersPropsType} from "./UsersContainer";
import {UsersPageType} from "../../redux/stateTypes";
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
    this.props.setCurrentPage(currentPage)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
      .then(res => this.props.setUsers(res.data.items))
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    let curP = this.props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);


    return (<React.Fragment>
        <div className={style.buttons}>
          {slicedPages.map((p, i) =>
            <span key={i}
                  className={this.props.currentPage === p ? style.selected : ''}
                  onClick={() => this.onClickSetCurrentPage(p)}
            >{p}</span>)}
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

