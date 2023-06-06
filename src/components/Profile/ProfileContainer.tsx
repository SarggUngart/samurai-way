import React from 'react';
import Profile from "./Profile";
import {ProfilePageType, ProfileType} from "../../redux/stateTypes";
import axios from "axios";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<WithRouterProfileType, ProfilePageType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '2'
    }

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(res => {
        this.props.setUserProfileAC(res.data)
      })
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