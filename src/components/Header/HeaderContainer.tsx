import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {AuthUserType} from "../../redux/stateTypes";
import {authTC} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<AuthUserPropsType, AuthUserType> {

  componentDidMount() {
    this.props.authTC()
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
  authTC: () => void
}

export type AuthUserPropsType = mapDispatchToPropsType & mapStateToPropsType

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
  return {
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
  }
}

export default connect(mapStateToProps, {authTC})(HeaderContainer)