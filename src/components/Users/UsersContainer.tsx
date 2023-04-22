import {connect} from "react-redux";
import Users from "./Users";
import {UsersPageType} from "../../redux/state";
import {ReduxStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC} from "../../redux/friends-reducer";

type mapStateToPropsType = {
  usersPage: UsersPageType
}

type mapDispatchToPropsType = {
  follow: (id: number, follow: boolean) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
  return {
    usersPage: state.usersReducer
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    follow: (id, follow) => {
      dispatch(followAC(id, follow))
    }
  }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)