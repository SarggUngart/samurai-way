import {ActionsType, AuthUserType} from "./stateTypes";
import {Dispatch} from "redux";
import {AuthAPI} from "../api/api";

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

export const authTC = () => (dispatch: Dispatch) => {
  AuthAPI.getAuth()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserDataAC(data.data))
      }
    })
}




