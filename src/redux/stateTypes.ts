import {addPostAC, updatePostAC} from "./profile-reducer";
import {addMessageAC, updateMessageAC} from "./dialogs-reducer";
import {followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC} from "./users-reducer";

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
  profilePostsData: PostsDataType[],
  newPostText: string
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


