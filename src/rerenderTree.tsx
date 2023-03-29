import {addPost, stateType, updateNewPost} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export const rerenderTree = (state: stateType) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>,
    document.getElementById('root')
  );
}