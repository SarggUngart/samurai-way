import React from 'react';
import Profile from "./Profile";
import {ProfilePageType, ProfileType} from "../../redux/stateTypes";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {setProfileTC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component<WithRouterProfileType, ProfilePageType> {
  componentDidMount() {

    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '2'
    }
    this.props.setProfileTC(userId)
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

type mapStateToPropsType = {
  profile: ProfileType
}

type mapDispatchToProps = {
  setProfileTC: (userId: string) => void
}

type UserIdType = {
  userId: string
}

type WithRouterProfileType = ProfilePropsType & RouteComponentProps<UserIdType>

export type ProfilePropsType = mapStateToPropsType & mapDispatchToProps


const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => ({
  profile: state.profileReducer.profile
})


export default compose<React.ComponentType>(
  connect(mapStateToProps, {setProfileTC}),
  withRouter,
  // WithAuthRedirect
)(ProfileContainer)