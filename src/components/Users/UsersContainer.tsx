import {connect} from "react-redux";
import {UsersDataType, UsersPageType} from "../../redux/stateTypes";
import {ReduxStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";


class UsersContainer extends React.Component<UsersPropsType, UsersPageType> {
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
    return (<Users
      onClickSetCurrentPage={this.onClickSetCurrentPage}
      totalCount={this.props.totalCount}
      pageSize={this.props.pageSize}
      followed={this.props.followed}
      usersPage={this.props.usersPage}
    />)
  }
}

type mapStateToPropsType = {
  usersPage: UsersPageType
  pageSize: number
  totalCount: number
  currentPage: number
}

type mapDispatchToPropsType = {
  followed: (id: number, followed: boolean) => void
  setUsers: (users: UsersDataType[]) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUserCountAC: (totalCount: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
  return {
    usersPage: state.usersReducer,
    pageSize: state.usersReducer.pageSize,
    totalCount: state.usersReducer.totalCount,
    currentPage: state.usersReducer.currentPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    followed: (id, followed) => {
      dispatch(followAC(id, followed))
    },
    setUsers: (users: UsersDataType[]) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPage: number) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUserCountAC: (totalCount: number) => {
      dispatch(setTotalUserCountAC(totalCount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)