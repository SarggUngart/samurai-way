import {addPostAC, setUserProfileAC, updatePostAC} from "./profile-reducer";
import {addMessageAC, updateMessageAC} from "./dialogs-reducer";
import {followAC, setCurrentPageAC, setFetchingAC, setTotalUserCountAC, setUsersAC} from "./users-reducer";

export type StateType = {
  profilePage: ProfilePageType,
  dialogsPage: DialogsPageType,
  usersPage: UsersPageType
}

export type DialogsDataType = {
  id: number
  name: string
}

export type MessagesDataType = {
  id: number
  message: string
}

export type PostsDataType = {
  id: number
  postText: string
  likesCount: number
}

export type ProfileType = {
  "aboutMe": string,
  "contacts": {
    "facebook": string,
    "website": null,
    "vk": string,
    "twitter": string,
    "instagram": string,
    "youtube": null,
    "github": string,
    "mainLink": null
  },
  "lookingForAJob": boolean,
  "lookingForAJobDescription": string,
  "fullName": string,
  "userId": null
  "photos": {
    "small": string,
    "large": string
  }
}

export type UsersDataType = {
  name: string
  id: number
  uniqueUrlName: null
  photos: {
    small: string
    large: string
  },
  status: null,
  followed: boolean
}


export type ProfilePageType = {
  profilePostsData: PostsDataType[]
  newPostText: string
  profile:ProfileType
}

export type DialogsPageType = {
  dialogsData: DialogsDataType[]
  messagesData: MessagesDataType[]
  newMessageText: string
}

export type UsersPageType = {
  usersData: UsersDataType[]
  pageSize: number
  totalCount: number
  currentPage: number
  isFetching: boolean
}

export type ActionsType =
  ReturnType<typeof addPostAC>
  | ReturnType<typeof updatePostAC>
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof updateMessageAC>
  | ReturnType<typeof followAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUserCountAC>
  | ReturnType<typeof setFetchingAC>
  | ReturnType<typeof setUserProfileAC>



