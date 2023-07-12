import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import {Login} from "./components/Login/Login";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {ErrorSnackbar} from "./components/ErrorSnackbar/ErrorSnackbar";
import {compose} from "redux";
import {connect} from "react-redux";
import {getAuthUserDataTC} from "./redux/auth-reducer";

class App extends React.Component<AuthUserPropsType> {

  componentDidMount() {
    this.props.authTC()
  }

  render() {
    return (
      <BrowserRouter>

        <div className={'app-wrapper'}>

          <HeaderContainer/>
          <Nav/>
          <main className={'main'}>
            <Route path='/profile/:userId?' render={() =>
              <ProfileContainer/>}/>
            <Route path='/dialogs' render={() =>
              <DialogsContainer/>}/>
            <Route path='/users' render={() =>
              <UsersContainer/>}/>
            <Route path='/login' render={() =>
              <Login/>}/>
            <ErrorSnackbar/>
          </main>
        </div>
      </BrowserRouter>
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


export default compose<React.ComponentType>(connect(null, {
  authTC: getAuthUserDataTC
}))(App)
