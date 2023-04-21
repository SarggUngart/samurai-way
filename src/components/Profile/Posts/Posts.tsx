import React from 'react';
import PostList from "./PostList/PostList";
import {PostsDataType} from "../../../redux/state";
import {NewPostFormContainer} from "./NewPostForm/NewPostFormContainer";

type PostsPropsType = {
  postsData: PostsDataType[]
}

const Posts: React.FC<PostsPropsType> = (props) => {
  const {postsData,} = props

  return (
    <div>
      <NewPostFormContainer/>
      {postsData.map(p =>
        <PostList key={p.id} id={p.id} messageInPost={p.postText} likesCount={p.likesCount}/>
      )}
    </div>
  );
};

export default Posts;