import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appReducer} from "./app-reducer";


export type RootState = typeof reducer;
export type ReduxStateType = ReturnType<RootState>

const reducer = combineReducers({
  profileReducer,
  dialogsReducer,
  usersReducer,
  authReducer,
  appReducer
})


export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<ReduxStateType> = useSelector
export type AppDispatchType = ThunkDispatch<ReduxStateType, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, ReduxStateType, unknown, AnyAction>

export const reduxStore = createStore(reducer, applyMiddleware(thunk))

// @ts-ignore
window.store = reduxStore;
