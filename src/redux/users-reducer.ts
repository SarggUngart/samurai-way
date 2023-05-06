import {ActionsType, UsersDataType, UsersPageType} from "./stateTypes";

const usersReducerInitialState: UsersPageType = {
  usersData: [] as UsersDataType[]
}


export const usersReducer = (state: UsersPageType = usersReducerInitialState, action: ActionsType): UsersPageType => {

  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state,
        usersData: state.usersData.map(u => u.id === action.id ? {...u, followed: !action.followed} : u)
      }
    }
    case "SET_USERS": {
      return {...state, usersData: [...state.usersData, ...action.users]}
    }
  }

  return state
}

export const followAC = (id: number, followed: boolean) => {
  return {
    type: 'FOLLOW',
    id,
    followed
  } as const
}

export const setUsersAC = (users: UsersDataType[]) => {
  return {
    type: 'SET_USERS',
    users
  } as const
}