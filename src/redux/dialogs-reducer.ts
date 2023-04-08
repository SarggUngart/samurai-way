import {ActionsType, DialogsPageType, MessagesDataType} from "./state";

export const dialogsReducer = (state: DialogsPageType, action: ActionsType): any => {
  switch (action.type) {
    case 'ADD-MESSAGE': {
      const newMessage: MessagesDataType = {
        id: Date.now(),
        message: state.newMessageText
      }
      state.messagesData.push(newMessage)
      state.newMessageText = ''
      return state
    }
    case 'UPDATE-MESSAGE': {
      state.newMessageText = action.newMessageText
      return state
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
