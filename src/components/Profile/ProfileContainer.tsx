import React from 'react';
import Profile from "./Profile";
import {ProfilePageType, ProfileType} from "../../redux/stateTypes";
import axios from "axios";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {setUserProfileAC} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component<any, ProfilePageType> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(res => this.props.setUserProfileAC(res.data))
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


export type ProfilePropsType = mapStateToPropsType


const mapStateToProps = (state: ReduxStateType):mapStateToPropsType=> ({
   profile : state.profileReducer.profile
})

export default connect(mapStateToProps, {setUserProfileAC})(ProfileContainer)