import {AppThunk} from "./redux-store";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'loading' as RequestStatusType,
  error: null as string | null,
  isInitialized: false,
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-ERROR':
      return {...state, error: action.error}
    case "APP/SET-INIT":
      return {...state, isInitialized: true}
    default:
      return state
  }
}

export const setErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setInitAC = (isInitialized: boolean) => ({type: 'APP/SET-INIT', isInitialized} as const)

type ActionsType = ReturnType<typeof setErrorAC> | ReturnType<typeof setInitAC>

const initializeTC = (): AppThunk => (dispatch) => {

}