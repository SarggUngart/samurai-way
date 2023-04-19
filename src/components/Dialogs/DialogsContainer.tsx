import React from 'react';
import {StoreType} from "../../redux/state";
import {addMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";
import {ReducersRootState} from "../../redux/redux-store";
import Dialogs from "./Dialogs";

type dialogsPropsType = {
  state: ReducersRootState
  store: StoreType
}


export const DialogsContainer: React.FC<dialogsPropsType> = (props) => {
  const {store, state} = props
  const stateForDialogs = state.dialogsReducer.dialogsData
  const stateForMessages = state.dialogsReducer.messagesData


  const onClickAddMessageHandler = () => {
    if (state.dialogsReducer.newMessageText.length > 0)
      store.dispatch(addMessageAC())
  }


  const onChangeNewMessageHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    store.dispatch(updateMessageAC(e.currentTarget.value))
  }


  return (
    <Dialogs addMessage={onClickAddMessageHandler} updateMessageText={onChangeNewMessageHandler}
             stateForDialogs={stateForDialogs}
             stateForMessages={stateForMessages}
             message={state.dialogsReducer.newMessageText}
    />
  );
};

