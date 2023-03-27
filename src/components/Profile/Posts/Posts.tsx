import React from 'react';
import NewPostForm from "./NewPostForm/NewPostForm";
import PostList from "./PostList/PostList";
import {postsDataType} from "../../../redux/state";

type PostsPropsType = {
  postsData: postsDataType[]
  addPost: (postText: string) => void

}

const Posts: React.FC<PostsPropsType> = (props) => {
  const {postsData,addPost} = props

  return (
    <div>
      <NewPostForm addPost={addPost}/>
      {postsData.map(p =>
        <PostList key={p.id} id={p.id} messageInPost={p.postText} likesCount={p.likesCount}/>
      )}
    </div>
  );
};

export default Posts;