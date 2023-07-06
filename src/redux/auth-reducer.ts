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
        ...action.data,
        isAuth: true
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

export const getAuthUserDataTC = () => (dispatch:Dispatch) => {
  AuthAPI.me()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserDataAC(data.data))
      }
    })
}

export const loginTS = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
  AuthAPI.login(email, password, rememberMe)
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(getAuthUserDataTC())
      }
    })
}


