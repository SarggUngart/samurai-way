import {connect} from "react-redux";
import {UsersPageType} from "../../redux/stateTypes";
import {ReduxStateType} from "../../redux/redux-store";
import {followUserTC, getUsersTC, unFollowUserTC} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {CircularProgress} from "@mui/material";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


class UsersContainer extends React.Component<UsersPropsType, UsersPageType> {
  componentDidMount() {
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
  }

  onClickSetCurrentPage = (currentPage: number) => {
    this.props.getUsersTC(currentPage, this.props.pageSize)
  }


  render() {

    return (
      <React.Fragment>
        {this.props.isFetching
          ?
          <CircularProgress
            sx={{margin: 'auto'}}
            color="secondary"/>
          :
          <Users
            onClickSetCurrentPage={this.onClickSetCurrentPage}
            followUserTC={this.props.followUserTC}
            unFollowUserTC={this.props.unFollowUserTC}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            usersPage={this.props.usersPage}
            currentPage={this.props.currentPage}
            followingProgress={this.props.followingProgress}
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
  followingProgress: number | null
}

type mapDispatchToPropsType = {
  getUsersTC: (currentPage: number, pageSize: number) => void
  followUserTC: (userId: number, followed: boolean) => void
  unFollowUserTC: (userId: number, followed: boolean) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
  return {
    usersPage: state.usersReducer,
    pageSize: state.usersReducer.pageSize,
    totalCount: state.usersReducer.totalCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching,
    followingProgress: state.usersReducer.isFollowingProgress,
  }
}


export default compose<React.ComponentType>(connect(mapStateToProps, {
    getUsersTC,
    followUserTC,
    unFollowUserTC
  }
), withRouter, WithAuthRedirect)(UsersContainer)