import React from 'react';
import {reduxStore, ReducersRootState} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";



const rerenderTree = (state: ReducersRootState) => {
  ReactDOM.render(
    <App store={reduxStore} state={state}/>,
    document.getElementById('root')
  );
}
reduxStore.subscribe(() => {
  rerenderTree(reduxStore.getState())
})

rerenderTree(reduxStore.getState())
