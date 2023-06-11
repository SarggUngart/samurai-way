import {connect} from "react-redux";
import {UsersDataType, UsersPageType} from "../../redux/stateTypes";
import {ReduxStateType} from "../../redux/redux-store";
import {
  followAC,
  setCurrentPageAC,
  setFetchingAC,
  setFollowingProgressAC,
  setTotalUserCountAC,
  setUsersAC,
  unFollowAC
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {CircularProgress} from "@mui/material";
import {UsersAPI} from "../../api/api";


class UsersContainer extends React.Component<UsersPropsType, UsersPageType> {
  componentDidMount() {
    this.props.setFetchingAC(false)
    UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.setUsersAC(data.items)
        this.props.setTotalUserCountAC(data.totalCount)
        this.props.setFetchingAC(true)
      })
  }

  onClickSetCurrentPage = (currentPage: number) => {
    this.props.setCurrentPageAC(currentPage)
    UsersAPI.getUsers(currentPage, this.props.pageSize)
      .then(data => this.props.setUsersAC(data.items))
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
            followAC={this.props.followAC}
            unFollowAC={this.props.unFollowAC}
            usersPage={this.props.usersPage}
            currentPage={this.props.currentPage}
            followingProgress={this.props.followingProgress}
            setFollowingProgressAC={this.props.setFollowingProgressAC}
            setFetchingAC={this.props.setFetchingAC}
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
  followingProgress:number | null
}

type mapDispatchToPropsType = {
  followAC: (id: number, followed: boolean) => void
  unFollowAC: (id: number, followed: boolean) => void
  setUsersAC: (users: UsersDataType[]) => void
  setCurrentPageAC: (currentPage: number) => void
  setTotalUserCountAC: (totalCount: number) => void
  setFollowingProgressAC: (followingProgress:number | null) => void
  setFetchingAC: (isFetching: boolean) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
  return {
    usersPage: state.usersReducer,
    pageSize: state.usersReducer.pageSize,
    totalCount: state.usersReducer.totalCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching,
    followingProgress: state.usersReducer.isFollowingProgress
  }
}

export default connect(mapStateToProps, {
    followAC,
    unFollowAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setFetchingAC,
    setFollowingProgressAC
  }
)(UsersContainer)