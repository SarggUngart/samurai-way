import React from 'react';
import newPostForm from "./NewPostForm";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";
import {PostsDataType} from "../../../../redux/state";
import {addPostAC, updatePostAC} from "../../../../redux/profile-reducer";


type mapStateToPropsType = {
  profilePostsData: PostsDataType[]
  newPostText: string
}

type mapDispatchToPropsType = {
  addPost: () => void
  updatePost: (newPostText: string) => void
}

export type NewPostFormType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
  return {
    profilePostsData: state.profileReducer.profilePostsData,
    newPostText: state.profileReducer.newPostText
  }
}


const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addPost: () => {
      dispatch(addPostAC())
    },
    updatePost: (newPostText: string) => {
      dispatch(updatePostAC(newPostText))
    }
  }
}


export const NewPostFormContainer = connect(mapStateToProps, mapDispatchToProps)(newPostForm)