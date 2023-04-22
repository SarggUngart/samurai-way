import {ActionsType, UsersPageType} from "./state";

const usersReducerInitialState: UsersPageType = {
  usersData: [
    {
      id: 1,
      name: 'Bob',
      follow: false,
      age: 44,
      avatar: 'https://i.pinimg.com/236x/63/dd/f6/63ddf6a2d678afa19f80de6a152a780b.jpg',
      status: 'lol',
      location: {
        city: 'Minsk',
        country: 'Belarus'
      }
    },
    {
      id: 2,
      name: 'Andrew',
      follow: false,
      age: 30,
      avatar: 'https://avatars.mds.yandex.net/i?id=abbb34b0d8845a6ed2b6b6ef47cb47310ec1106e-4464306-images-thumbs&n=13&exp=1',
      status: 'kek',
      location: {
        city: 'Minsk',
        country: 'Belarus'
      }
    },
    {
      id: 3,
      name: 'Serj',
      follow: false,
      age: 33,
      avatar: 'https://avatars.mds.yandex.net/i?id=df3a59763a33d93d70cfed7763b76b7462e57e18-8497330-images-thumbs&n=13&exp=1',
      status: 'who am i',
      location: {
        city: 'Minsk',
        country: 'Belarus'
      }
    },
    {
      id: 4,
      name: 'Marina',
      follow: false,
      age: 24,
      avatar: 'https://avatars.mds.yandex.net/i?id=c3def9bd36b1194116167fabd22a5230_sr-4229717-images-thumbs&n=13&exp=1',
      status: 'boss is here',
      location: {
        city: 'Minsk',
        country: 'Belarus'
      }
    },
    {
      id: 5,
      name: 'Sveta',
      follow: false,
      age: 18,
      avatar: 'https://avatars.mds.yandex.net/i?id=76e24f494c67df27ab806335b467308515628a80-9181140-images-thumbs&n=13&exp=1',
      status: 'where is my car?',
      location: {
        city: 'Minsk',
        country: 'Belarus'
      }
    }
  ]
}


export const usersReducer = (state: UsersPageType = usersReducerInitialState, action: ActionsType): UsersPageType => {

  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state,
        usersData: state.usersData.map(u => u.id === action.id ? {...u, follow: !action.follow} : u)
      }
    }
  }

  return state
}

export const followAC = (id: number, follow: boolean) => {
  return {
    type: 'FOLLOW',
    id,
    follow
  } as const
}
