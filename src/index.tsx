import React from 'react';
import {store} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


const rerenderTree = () => {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
}
store.subscribe(rerenderTree)
rerenderTree()
