import React from 'react';
import NewPostForm from "./NewPostForm/NewPostForm";
import PostList from "./PostList/PostList";
import {ActionsType, PostsDataType} from "../../../redux/state";

type PostsPropsType = {
  postsData: PostsDataType[]
  newPostText: string
  dispatch:(action:ActionsType)=>void
}

const Posts: React.FC<PostsPropsType> = (props) => {
  const {postsData, newPostText, dispatch} = props

  return (
    <div>
      <NewPostForm dispatch={dispatch} newPostText={newPostText}/>
      {postsData.map(p =>
        <PostList key={p.id} id={p.id} messageInPost={p.postText} likesCount={p.likesCount}/>
      )}
    </div>
  );
};

export default Posts;