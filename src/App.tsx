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
import {initializeAppTC} from "./redux/app-reducer";
import {ReduxStateType} from "./redux/redux-store";
import CircularProgress from "@mui/material/CircularProgress";

class App extends React.Component<AuthUserPropsType> {

  componentDidMount() {
    this.props.initializeAppTC()
  }

  render() {
    if (!this.props.isInit) {
      return <CircularProgress
        sx={{margin: 'auto'}}
        color="secondary"/>
    }

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
  isInit: boolean
}

type mapDispatchToPropsType = {
  initializeAppTC: () => void
}

export type AuthUserPropsType = mapDispatchToPropsType & mapStateToPropsType


const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => ({
  isInit: state.appReducer.isInitialized
})

export default compose<React.ComponentType>(connect(mapStateToProps, {
  initializeAppTC
}))(App)
