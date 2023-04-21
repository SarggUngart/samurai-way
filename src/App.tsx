import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Users from "./components/Users/Users";
import {reduxStore} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


const App: React.FC = () => {

  const profileState = reduxStore.getState().profileReducer
  const friendsState = reduxStore.getState().usersReducer

  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header/>
        <Nav/>
        <main className={'main'}>
          <Route path='/profile' render={(props) =>
            <Profile
              {...props}
              state={profileState}
            />}/>
          <Route path='/dialogs' render={() =>
            <DialogsContainer/>}
          />
          <Route path='/friends' render={(props) =>
            <Users
              {...props}
              state={friendsState}/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
