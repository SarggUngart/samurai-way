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
import {StoreType} from "./redux/state"
import Friends from "./components/Friends/Friends";

type statePropsType = {
  store: StoreType
}

const App: React.FC<statePropsType> = (props) => {
  const {store} = props
  const state = store.getState()

  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header/>
        <Nav/>
        <main className={'main'}>
          <Route path='/profile' render={(props) =>
            <Profile
              {...props}
              profileState={state.profilePage.profilePostsData}
              newPostText={state.profilePage.newPostText}
              dispatch={store.dispatch.bind(store)}
            />}/>
          <Route path='/dialogs' render={(props) =>
            <Dialogs
              {...props}
              dispatch={store.dispatch.bind(store)}
              dialogsState={state.dialogsPage}
              newMessageText={state.dialogsPage.newMessageText}
            />}/>
          <Route path='/friends' render={(props) =>
            <Friends
              {...props}
              friendsData={state.friendsPage.friendsData}/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
