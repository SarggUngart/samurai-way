import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {friendsReducer} from "./friends-reducer";


export type ReducersRootState = ReturnType<typeof reducers> //Type of new State (redux).


const reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  friendsReducer,
})

export const reduxStore: any = createStore(reducers)


