import React from 'react';
import {reduxStore} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";




ReactDOM.render(
  <Provider store={reduxStore}>
    <App/>
  </Provider>
  ,
  document.getElementById('root')
);




