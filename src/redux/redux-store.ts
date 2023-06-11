import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";


export type RootState = typeof reducers;
export type ReduxStateType = ReturnType<RootState>

const reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  usersReducer,
  authReducer
})

export const reduxStore = createStore(reducers, applyMiddleware(thunk))

// @ts-ignore
window.reduxStore = reduxStore;
