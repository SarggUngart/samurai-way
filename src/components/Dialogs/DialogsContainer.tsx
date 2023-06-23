import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {DialogsPageType} from "../../redux/stateTypes";
import {addMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


type mapStateToPropsType = {
  dialogsPage: DialogsPageType

}

type mapDispatchToPropsType = {
  addMessageAC: () => void
  updateMessageAC: (newMessageText: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
  return {
    dialogsPage: state.dialogsReducer
  }
}

// const AuthRedirectComponent = WithAuthRedirect(Dialogs)

// DialogsContainer = connect(mapStateToProps, {addMessageAC, updateMessageAC})(AuthRedirectComponent)

export default compose<React.ComponentType>(connect(mapStateToProps, {addMessageAC, updateMessageAC}),withRouter, WithAuthRedirect)(Dialogs)