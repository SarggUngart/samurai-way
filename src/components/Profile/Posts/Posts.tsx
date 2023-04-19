import React from 'react';
import PostList from "./PostList/PostList";
import {ActionsType, PostsDataType, StoreType} from "../../../redux/state";
import {NewPostFormContainer} from "./NewPostForm/NewPostFormContainer";

type PostsPropsType = {
  postsData: PostsDataType[]
  newPostText: string
  store: StoreType
}

const Posts: React.FC<PostsPropsType> = (props) => {
  const {postsData, newPostText, store} = props

  return (
    <div>
      <NewPostFormContainer store={store} newPostText={newPostText}/>
      {postsData.map(p =>
        <PostList key={p.id} id={p.id} messageInPost={p.postText} likesCount={p.likesCount}/>
      )}
    </div>
  );
};

export default Posts;