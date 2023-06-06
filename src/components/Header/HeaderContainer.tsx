import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {AuthUserType} from "../../redux/stateTypes";
import {setUserDataAC} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<AuthUserPropsType, AuthUserType> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .then(res => {
        if (res.data.resultCode === 0) {
          this.props.setUserDataAC(res.data.data)
        }
      })
  }

  render() {
    return (
      <Header {...this.props}/>
    );
  }
}


type mapStateToPropsType = {
  isAuth: boolean
  login: string | null
}

type mapDispatchToPropsType = {
  setUserDataAC: (data: AuthUserType) => void
}

export type AuthUserPropsType = mapDispatchToPropsType & mapStateToPropsType

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
  return {
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
  }
}

export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer)