import React from 'react';
import Profile from "./Profile";
import {ProfilePageType, ProfileType} from "../../redux/stateTypes";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ProfileAPI} from "../../api/api";


class ProfileContainer extends React.Component<WithRouterProfileType, ProfilePageType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    console.log(userId)
    if (!userId) {
      userId = '2'
    }

    ProfileAPI.getProfile(userId)
      .then(data => this.props.setUserProfileAC(data))
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
  setUserProfileAC: (profile: ProfileType) => void
}

type UserIdType = {
  userId: string
}

type WithRouterProfileType = ProfilePropsType & RouteComponentProps<UserIdType>

export type ProfilePropsType = mapStateToPropsType & mapDispatchToProps


const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => ({
  profile: state.profileReducer.profile
})

export const ProfileWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfileAC})(ProfileWithRouter)