import {addPostAC, getStatusAC, setUserProfileAC, updatePostAC} from "./profile-reducer";
import {addMessageAC, updateMessageAC} from "./dialogs-reducer";
import {
  followAC,
  setCurrentPageAC,
  setFetchingAC,
  setFollowingProgressAC,
  setTotalUserCountAC,
  setUsersAC,
  unFollowAC
} from "./users-reducer";
import {setUserDataAC} from "./auth-reducer";

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
  aboutMe: string
  contacts: {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
  },
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  fullName: string,
  userId: string
  photos: {
    small: string
    large: string
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
  profile: ProfileType
  status: string
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
  isFollowingProgress: number | null
}

export type AuthUserType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}


export type ActionsType =
  ReturnType<typeof addPostAC>
  | ReturnType<typeof updatePostAC>
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof updateMessageAC>
  | ReturnType<typeof followAC>
  | ReturnType<typeof unFollowAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUserCountAC>
  | ReturnType<typeof setFetchingAC>
  | ReturnType<typeof setUserProfileAC>
  | ReturnType<typeof setUserDataAC>
  | ReturnType<typeof setFollowingProgressAC>
  | ReturnType<typeof getStatusAC>



