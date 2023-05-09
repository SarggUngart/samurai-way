import {connect} from "react-redux";
import Users from "./Users";
import {UsersDataType, UsersPageType} from "../../redux/stateTypes";
import {ReduxStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC} from "../../redux/users-reducer";

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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)