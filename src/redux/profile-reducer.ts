import {ActionsType, PostsDataType, ProfilePageType} from "./state";

export const profileReducer = (state: ProfilePageType, action: ActionsType): any => {

  switch (action.type) {
    case  'ADD-POST': {
      const newPost: PostsDataType = {
        id: Date.now(),
        postText: state.newPostText,
        likesCount: 0,
      }
      state.profilePostsData.unshift(newPost)
      state.newPostText = ''
      return state
    }

    case 'UPDATE-NEW-POST': {
      state.newPostText = action.newPostText
      return state
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