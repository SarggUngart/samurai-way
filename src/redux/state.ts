import {addPostAC, profileReducer, updatePostAC} from "./profile-reducer";
import {addMessageAC, dialogsReducer, updateMessageAC} from "./dialogs-reducer";
import {friendsReducer} from "./friends-reducer";

export type StateType = {
  profilePage: ProfilePageType,
  dialogsPage: DialogsPageType,
  friendsPage: FriendsPageType
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

export type FriendsDataType = {
  id: number
  name: string
  age: number
  avatar: string
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

export type FriendsPageType = {
  friendsData: FriendsDataType[]
}


export type ActionsType =
  ReturnType<typeof addPostAC>
  | ReturnType<typeof updatePostAC>
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof updateMessageAC>

export type StoreType = {
  _state: StateType
  _rerenderTree: () => void
  subscribe: (observer: () => void) => void
  getState: () => StateType
  dispatch: (action: ActionsType) => void
}

export const store: StoreType = {
  _state: {
    profilePage: {
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
      ],
      newPostText: ""
    },
    dialogsPage: {
      dialogsData: [
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Serj'},
        {id: 4, name: 'Marina'},
        {id: 5, name: 'Sveta'}
      ],
      messagesData: [
        {id: 1, message: 'hello'},
        {id: 2, message: 'how are you'},
        {id: 3, message: 'i get an offer'},
      ],
      newMessageText: ""
    },
    friendsPage: {
      friendsData: [
        {
          id: 1,
          name: 'Bob',
          age: 20,
          avatar: 'https://i.pinimg.com/236x/63/dd/f6/63ddf6a2d678afa19f80de6a152a780b.jpg'
        },
        {
          id: 2,
          name: 'Andrew',
          age: 30,
          avatar: 'https://avatars.mds.yandex.net/i?id=abbb34b0d8845a6ed2b6b6ef47cb47310ec1106e-4464306-images-thumbs&n=13&exp=1'
        },
        {
          id: 3,
          name: 'Serj',
          age: 33,
          avatar: 'https://avatars.mds.yandex.net/i?id=df3a59763a33d93d70cfed7763b76b7462e57e18-8497330-images-thumbs&n=13&exp=1'
        },
        {
          id: 4,
          name: 'Marina',
          age: 24,
          avatar: 'https://avatars.mds.yandex.net/i?id=c3def9bd36b1194116167fabd22a5230_sr-4229717-images-thumbs&n=13&exp=1'
        },
        {
          id: 5,
          name: 'Sveta',
          age: 18,
          avatar: 'https://avatars.mds.yandex.net/i?id=76e24f494c67df27ab806335b467308515628a80-9181140-images-thumbs&n=13&exp=1'
        }
      ]
    }
  },
  _rerenderTree() {
  },

  subscribe(observer: () => void) {
    this._rerenderTree = observer
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.friendsPage = friendsReducer(this._state.friendsPage, action)
    this._rerenderTree()
  }
}



