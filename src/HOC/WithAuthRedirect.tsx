import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {ReduxStateType} from "../redux/redux-store";

type mapStateToPropsType = {
  isAuth: boolean
}

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
  return {
    isAuth: state.authReducer.isAuth
  }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: mapStateToPropsType) => {
    const {isAuth, ...restProps} = props
    if (!isAuth) return <Redirect to='login'/>
    return <Component {...restProps as T}/>
  }

  const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

  return ConnectedRedirectComponent
};

