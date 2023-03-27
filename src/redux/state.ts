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
  age:number
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
      {id: 1, name: 'Bob', age:20, avatar: 'https://i.pinimg.com/236x/63/dd/f6/63ddf6a2d678afa19f80de6a152a780b.jpg'},
      {id: 2, name: 'Andrew', age:30, avatar: 'https://avatars.mds.yandex.net/i?id=abbb34b0d8845a6ed2b6b6ef47cb47310ec1106e-4464306-images-thumbs&n=13&exp=1'},
      {id: 3, name: 'Serj', age:33, avatar: 'https://avatars.mds.yandex.net/i?id=df3a59763a33d93d70cfed7763b76b7462e57e18-8497330-images-thumbs&n=13&exp=1'},
      {id: 4, name: 'Marina', age:24, avatar: 'https://avatars.mds.yandex.net/i?id=c3def9bd36b1194116167fabd22a5230_sr-4229717-images-thumbs&n=13&exp=1'},
      {id: 5, name: 'Sveta', age:18, avatar: 'https://avatars.mds.yandex.net/i?id=76e24f494c67df27ab806335b467308515628a80-9181140-images-thumbs&n=13&exp=1'}
    ]
  }
}

export default state




