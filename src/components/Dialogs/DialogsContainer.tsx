import React from 'react';
import Dialogs from "./Dialogs";
import StoreContext from "../../redux/StoreContext";
import {addMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";


export const DialogsContainer: React.FC = () => {

  return (
    <StoreContext.Consumer>{
      (store) => {

        const stateForDialogs = store.getState().dialogsReducer.dialogsData
        const stateForMessages = store.getState().dialogsReducer.messagesData

        const onClickAddMessageHandler = () => {
          if (store.getState().dialogsReducer.newMessageText.length > 0)
            store.dispatch(addMessageAC())
        }

        const onChangeNewMessageHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
          store.dispatch(updateMessageAC((e.currentTarget.value)))
        }

        return (
          <Dialogs addMessage={onClickAddMessageHandler} updateMessageText={onChangeNewMessageHandler}
                   stateForDialogs={stateForDialogs}
                   stateForMessages={stateForMessages}
                   message={store.getState().dialogsReducer.newMessageText}
          />
        )
      }


    }


    </StoreContext.Consumer>


  );
};

