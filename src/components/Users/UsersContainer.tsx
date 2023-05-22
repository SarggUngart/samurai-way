import {connect} from "react-redux";
import {UsersDataType, UsersPageType} from "../../redux/stateTypes";
import {ReduxStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setCurrentPageAC, setFetchingAC, setTotalUserCountAC, setUsersAC} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {CircularProgress} from "@mui/material";


class UsersContainer extends React.Component<UsersPropsType, UsersPageType> {
  componentDidMount() {
    this.props.setIsFetching(false)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.setTotalUserCount(res.data.totalCount)
        this.props.setIsFetching(true)
      })
  }

  onClickSetCurrentPage = (currentPage: number) => {
    this.props.setCurrentPage(currentPage)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
      .then(res => this.props.setUsers(res.data.items))
  }

  render() {
    return (
      <React.Fragment>
        {!this.props.isFetching
          ?
          <CircularProgress
            sx={{margin: 'auto'}}
            color="secondary"/>
          :
          <Users
            onClickSetCurrentPage={this.onClickSetCurrentPage}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            followed={this.props.followed}
            usersPage={this.props.usersPage}
          />}
      </React.Fragment>
    )
  }
}

type mapStateToPropsType = {
  usersPage: UsersPageType
  pageSize: number
  totalCount: number
  currentPage: number
  isFetching: boolean
}

type mapDispatchToPropsType = {
  followed: (id: number, followed: boolean) => void
  setUsers: (users: UsersDataType[]) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUserCount: (totalCount: number) => void
  setIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
  return {
    usersPage: state.usersReducer,
    pageSize: state.usersReducer.pageSize,
    totalCount: state.usersReducer.totalCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching
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
    setTotalUserCount: (totalCount: number) => {
      dispatch(setTotalUserCountAC(totalCount))
    },
    setIsFetching: (isFetching: boolean) => {
      dispatch(setFetchingAC(isFetching))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)