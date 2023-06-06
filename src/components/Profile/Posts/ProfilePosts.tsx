import React from 'react';
import {NewPostFormContainer} from "./NewPostForm/NewPostFormContainer";
import {PostsListContainer} from "./PostList/PostsListContainer";


const ProfilePosts: React.FC = () => {
 return (
    <div>
      <NewPostFormContainer/>
      <PostsListContainer/>
    </div>
  );
};

export default ProfilePosts;