import {ActionsType, DialogsPageType, MessagesDataType} from "./state";

const dialogsReducerInitialState: DialogsPageType = {
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
}

export const dialogsReducer = (state: DialogsPageType = dialogsReducerInitialState, action: ActionsType): DialogsPageType => {
  switch (action.type) {
    case 'ADD-MESSAGE': {
      const newMessage: MessagesDataType = {
        id: Date.now(),
        message: state.newMessageText
      }
      return {...state, messagesData: [...state.messagesData, newMessage], newMessageText: ''}
    }
    case 'UPDATE-MESSAGE': {
      return {...state, newMessageText: action.newMessageText}
    }
    default:
      return state
  }
}

export const addMessageAC = () => {
  return {
    type: 'ADD-MESSAGE'
  } as const
}

export const updateMessageAC = (newMessageText: string) => {
  return {
    type: 'UPDATE-MESSAGE',
    newMessageText
  } as const
}
