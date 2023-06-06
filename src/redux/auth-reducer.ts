import {ActionsType, AuthUserType} from "./stateTypes";

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
        isAuth:true
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