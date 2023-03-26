import React from 'react';
import NewPostForm from "./NewPostForm/NewPostForm";
import PostList from "./PostList/PostList";
import {postsDataType} from "../../../redux/state";

type PostsPropsType = {
  postsData: postsDataType[]
}

const Posts: React.FC<PostsPropsType> = (props) => {
  const {postsData} = props

  return (
    <div>
      <NewPostForm/>
      {postsData.map(p =>
        <PostList key={p.id} id={p.id} messageInPost={p.postText} likesCount={p.likesCount}/>
      )}
    </div>
  );
};

export default Posts;