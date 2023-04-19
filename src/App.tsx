import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {ReduxStateType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type statePropsType = {
  state: ReduxStateType
}

const App: React.FC<statePropsType> = (props) => {

  debugger
  const {state} = props

  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header/>
        <Nav/>
        <main className={'main'}>
          <Route path='/profile' render={(props) =>
            <Profile
              {...props}
              state={state}
            />}/>
          <Route path='/dialogs' render={() =>
            <DialogsContainer/>}
          />
          <Route path='/friends' render={(props) =>
            <Friends
              {...props}
              state={state}/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
