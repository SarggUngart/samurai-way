import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {DialogsPageType} from "../../redux/state";
import {addMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";


type mapStateToPropsType = {
  dialogsPage: DialogsPageType
}

type mapDispatchToPropsType = {
  addMessage: () => void
  updateMessageText: (newMessageText:string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
  return {
    dialogsPage: state.dialogsReducer
  }


}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addMessage: () => {
      dispatch(addMessageAC())
    },
    updateMessageText: (newMessageText:string) => {
      dispatch(updateMessageAC(newMessageText))
    }
  }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

