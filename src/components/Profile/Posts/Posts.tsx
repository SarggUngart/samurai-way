import React from 'react';
import NewPostForm from "./NewPostForm/NewPostForm";
import PostList from "./PostList/PostList";
import {postsDataType} from "../../../redux/state";

type PostsPropsType = {
  postsData: postsDataType[]
  newPostText: string
  addPost: () => void
  updateNewPost: (newPostText: string) => void
}

const Posts: React.FC<PostsPropsType> = (props) => {
  const {postsData, newPostText, addPost,updateNewPost} = props

  return (
    <div>
      <NewPostForm addPost={addPost} updateNewPost={updateNewPost} newPostText={newPostText}/>
      {postsData.map(p =>
        <PostList key={p.id} id={p.id} messageInPost={p.postText} likesCount={p.likesCount}/>
      )}
    </div>
  );
};

export default Posts;