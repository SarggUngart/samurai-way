import React from 'react';
import {NewPostFormContainer} from "./NewPostForm/NewPostFormContainer";
import {PostsListContainer} from "./PostList/PostsListContainer";


const Posts: React.FC = () => {
 return (
    <div>
      <NewPostFormContainer/>
      <PostsListContainer/>
    </div>
  );
};

export default Posts;