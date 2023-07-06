import {ActionsType, AuthUserType} from "./stateTypes";
import {AuthAPI} from "../api/api";
import {AppThunk} from "./redux-store";
import {Dispatch} from "redux";

const authReducerInitialState: AuthUserType = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}


export const authReducer = (state: AuthUserType = authReducerInitialState, action: ActionsType): AuthUserType => {
  switch (action.type) {
    case "SET-USER-DATA": {
      return {
        ...state,
        ...action.data
      }
    }
  }

  return state
}


export const setUserDataAC = (data: AuthUserType) => {
  return {
    type: 'SET-USER-DATA',
    data
  } as const
}

export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
  AuthAPI.me()
    .then(res => {
      if (res.resultCode === 0) {
        dispatch(setUserDataAC({id: res.data.id, email: res.data.email, login: res.data.login, isAuth: true}))
      }
    })
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
  AuthAPI.login(email, password, rememberMe)
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(getAuthUserDataTC())
      }else {
        alert(res.data.messages[0])
      }
    })
}


export const logOutTC = (): AppThunk => (dispatch) => {
  AuthAPI.logOut()
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(setUserDataAC({id: null, email: null, login: null, isAuth: false}))
      }
    })
}

