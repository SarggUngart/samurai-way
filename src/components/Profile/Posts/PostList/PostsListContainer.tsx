import React from 'react';
import {connect} from "react-redux";
import PostList from "./PostList";
import {PostsDataType} from "../../../../redux/stateTypes";
import {ReduxStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
  postListData: PostsDataType[]
}

export type PostListPropsType = mapStateToPropsType


const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
  return {
    postListData: state.profileReducer.profilePostsData,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {}
}


export const PostsListContainer = connect(mapStateToProps, mapDispatchToProps)(PostList);

