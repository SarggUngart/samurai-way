export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'loading' as RequestStatusType,
  error: null as string | null
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-ERROR':
      return {...state, error: action.error}
    default:
      return state
  }
}


export const setErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)

type ActionsType = ReturnType<typeof setErrorAC>
