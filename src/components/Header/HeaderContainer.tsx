import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {AuthUserType} from "../../redux/stateTypes";
import {setUserDataAC} from "../../redux/auth-reducer";
import {AuthAPI} from "../../api/api";


class HeaderContainer extends React.Component<AuthUserPropsType, AuthUserType> {

  componentDidMount() {
    AuthAPI.getAuth()
      .then(data => {
        if (data.resultCode === 0) {
          this.props.setUserDataAC(data.data)
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