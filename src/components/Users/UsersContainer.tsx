import {connect} from "react-redux";
import {UsersDataType, UsersPageType} from "../../redux/stateTypes";
import {ReduxStateType} from "../../redux/redux-store";
import {followAC, setCurrentPageAC, setFetchingAC, setTotalUserCountAC, setUsersAC} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {CircularProgress} from "@mui/material";


class UsersContainer extends React.Component<UsersPropsType, UsersPageType> {
  componentDidMount() {
    this.props.setFetchingAC(false)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsersAC(res.data.items)
        this.props.setTotalUserCountAC(res.data.totalCount)
        this.props.setFetchingAC(true)
      })
  }

  onClickSetCurrentPage = (currentPage: number) => {
    this.props.setCurrentPageAC(currentPage)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
      .then(res => this.props.setUsersAC(res.data.items))
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
            followed={this.props.followAC}
            usersPage={this.props.usersPage}
            currentPage={this.props.currentPage}
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
  followAC: (id: number, followed: boolean) => void
  setUsersAC: (users: UsersDataType[]) => void
  setCurrentPageAC: (currentPage: number) => void
  setTotalUserCountAC: (totalCount: number) => void
  setFetchingAC: (isFetching: boolean) => void
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

export default connect(mapStateToProps, {
    followAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setFetchingAC
  }
)(UsersContainer)