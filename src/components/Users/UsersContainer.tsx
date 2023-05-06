import {connect} from "react-redux";
import Users from "./Users";
import {UsersDataType, UsersPageType} from "../../redux/stateTypes";
import {ReduxStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC} from "../../redux/users-reducer";

type mapStateToPropsType = {
  usersPage: UsersPageType
}

type mapDispatchToPropsType = {
  followed: (id: number, followed: boolean) => void
  setUsers: (users: UsersDataType[]) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
  return {
    usersPage: state.usersReducer
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    followed: (id, followed) => {
      dispatch(followAC(id, followed))
    },
    setUsers: (users: UsersDataType[]) => {
      dispatch(setUsersAC(users))
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)