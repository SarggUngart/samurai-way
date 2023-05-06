import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";


export type RootState = typeof reducers;
export type ReduxStateType = ReturnType<RootState>

const reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  usersReducer,
})

export const reduxStore = createStore(reducers)

// @ts-ignore
window.reduxStore = reduxStore;
