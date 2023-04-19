import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { StoreType} from "./redux/state"
import Friends from "./components/Friends/Friends";
import {ReducersRootState} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
// import Friends from "./components/Friends/Friends";

type statePropsType = {
  state: ReducersRootState
  store: StoreType
}

const App: React.FC<statePropsType> = (props) => {

  debugger
  const {state, store} = props

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
              store={store}
            />}/>
          <Route path='/dialogs' render={(props) =>
            <DialogsContainer
              {...props}
              store={store}
              state={state}
            />}/>
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
