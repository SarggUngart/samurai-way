export type stateType = {
  profilePage: ProfilePageType,
  dialogsPage: dialogsPageType,
  friendsPage: friendsPageType
}

export type dialogsDataType = {
  id: number
  name: string
}

export type messagesDataType = {
  id: number
  message: string
}

export type postsDataType = {
  id: number
  postText: string
  likesCount: number
}

export type friendsDataType = {
  id: number
  name: string
  avatar: string
}

type ProfilePageType = {
  profilePostsData: postsDataType[]
}

type dialogsPageType = {
  dialogsData: dialogsDataType[]
  messagesData: messagesDataType[]
}

type friendsPageType = {
  friendsData: friendsDataType[]
}

const state: stateType = {
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
    ]
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
    ]
  },
  friendsPage: {
    friendsData: [
      {id: 1, name: 'Bob', avatar: 'https://i.pinimg.com/236x/63/dd/f6/63ddf6a2d678afa19f80de6a152a780b.jpg'},
      {id: 2, name: 'Andrew', avatar: 'https://i.pinimg.com/236x/63/dd/f6/63ddf6a2d678afa19f80de6a152a780b.jpg'},
      {id: 3, name: 'Serj', avatar: 'https://i.pinimg.com/236x/63/dd/f6/63ddf6a2d678afa19f80de6a152a780b.jpg'},
      {id: 4, name: 'Marina', avatar: 'https://i.pinimg.com/236x/63/dd/f6/63ddf6a2d678afa19f80de6a152a780b.jpg'},
      {id: 5, name: 'Sveta', avatar: 'https://i.pinimg.com/236x/63/dd/f6/63ddf6a2d678afa19f80de6a152a780b.jpg'}
    ]
  }
}

export default state





