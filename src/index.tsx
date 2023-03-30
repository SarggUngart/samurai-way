import React from 'react';
import state, {addPost, stateType, subscribe, updateNewPost} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

const rerenderTree = (state:stateType) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>,
    document.getElementById('root')
  );
}

rerenderTree(state)
subscribe(rerenderTree)