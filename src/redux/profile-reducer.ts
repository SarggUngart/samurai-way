import {ActionsType, PostsDataType, ProfilePageType, ProfileType} from "./stateTypes";


const initialProfileState: ProfilePageType = {
  profile: {} as ProfileType,
  profilePostsData: [
    {
      id: 1,
      postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate nam non quae quia repudiandae rerum voluptates voluptatum!',
      likesCount: 10
    }, {
      id: 2,
      postText: 'Architecto cupiditate delectus, deleniti, facilis, minima praesentium recusandae similique tempora tenetur totam voluptate!',
      likesCount: 2
    }
  ] as PostsDataType[],
  newPostText: ""
}

export const profileReducer = (state: ProfilePageType = initialProfileState, action: ActionsType): ProfilePageType => {

  switch (action.type) {
    case  'ADD-POST': {
      const newPost: PostsDataType = {
        id: Date.now(),
        postText: state.newPostText,
        likesCount: 0,
      }
      return {...state, profilePostsData: [newPost, ...state.profilePostsData], newPostText: ''}
    }

    case 'UPDATE-NEW-POST': {
      return {...state, newPostText: action.newPostText}
    }

    case "SET-USER-PROFILE": {
      return {...state, profile: action.profile}
    }
    default:
      return state
  }
}

export const addPostAC = () => {
  return {
    type: 'ADD-POST'
  } as const
}

export const updatePostAC = (newPostText: string) => {
  return {
    type: 'UPDATE-NEW-POST',
    newPostText
  } as const
}

export const setUserProfileAC = (profile: ProfileType) => {
  return {
    type: 'SET-USER-PROFILE',
    profile
  } as const
}
