import React from 'react';
import Profile from "./Profile";
import {ProfilePageType, ProfileType} from "../../redux/stateTypes";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {changeProfileStatusTC, setProfileStatusTC, setProfileTC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";


class ProfileContainer extends React.Component<WithRouterProfileType, ProfilePageType> {
  componentDidMount() {

    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '23675'
    }
    this.props.setProfileTC(userId)
    this.props.setProfileStatusTC(userId)
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} changeProfileStatusTC={this.props.changeProfileStatusTC}/>
    )
  }
}

type mapStateToPropsType = {
  profile: ProfileType
  status: string
}

type mapDispatchToProps = {
  setProfileTC: (userId: string) => void
  setProfileStatusTC: (userId: string) => void
  changeProfileStatusTC: (status: string) => void
}

type UserIdType = {
  userId: string
}

type WithRouterProfileType = ProfilePropsType & RouteComponentProps<UserIdType>

export type ProfilePropsType = mapStateToPropsType & mapDispatchToProps


const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status
})


export default compose<React.ComponentType>(
  connect(mapStateToProps, {setProfileTC, setProfileStatusTC, changeProfileStatusTC}),
  withRouter,
  WithAuthRedirect
)(ProfileContainer)