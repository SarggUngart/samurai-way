import React from 'react';
import {ReduxStateType, reduxStore} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "./redux/StoreContext";

const rerenderTree = (state: ReduxStateType) => {
  ReactDOM.render(
    <Provider reduxStore={reduxStore}>
      <App state={state}/>
    </Provider>
    ,
    document.getElementById('root')
  );
}


reduxStore.subscribe(() => {
  rerenderTree(reduxStore.getState())
})

rerenderTree(reduxStore.getState())
