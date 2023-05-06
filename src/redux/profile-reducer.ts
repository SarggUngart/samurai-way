import {ActionsType, PostsDataType, ProfilePageType} from "./stateTypes";


const initialProfileState: ProfilePageType = {
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