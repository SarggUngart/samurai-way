import {ActionsType, UsersDataType, UsersPageType} from "./stateTypes";

const usersReducerInitialState: UsersPageType = {
  usersData: [] as UsersDataType[],
  pageSize: 10,
  totalCount: 0,
  currentPage: 1,
  isFetching: false
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
      return {...state, usersData: action.users}
    }
    case "SET_CUR_PAGE" : {
      return {...state, currentPage: action.currentPage}
    }
    case "SET_TOTAL_USER_COUNT": {
      return {...state, totalCount: action.totalCount}
    }
    case "SET_FETCHING": {
      return {...state, isFetching: action.isFetching}
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

export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: 'SET_CUR_PAGE',
    currentPage
  } as const
}

export const setTotalUserCountAC = (totalCount: number) => {
  return {
    type: 'SET_TOTAL_USER_COUNT',
    totalCount
  } as const
}

export const setFetchingAC = (isFetching: boolean) => {
  return {
    type: 'SET_FETCHING',
    isFetching
  } as const
}