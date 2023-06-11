import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";


export type RootState = typeof reducer;
export type ReduxStateType = ReturnType<RootState>

const reducer = combineReducers({
  profileReducer,
  dialogsReducer,
  usersReducer,
  authReducer
})

export const reduxStore = createStore(reducer, applyMiddleware(thunk))

// @ts-ignore
window.reduxStore = reduxStore;
