import React from 'react';
import NewPost from "./NewPost/NewPost";
import AddedPost from "./AddedPost/AddedPost";

const Posts = () => {
  return (
    <div>
      <NewPost/>
      <AddedPost
        messageInPost={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate nam non quae quia repudiandae rerum voluptates voluptatum! Architecto cupiditate delectus, deleniti, facilis, minima praesentium recusandae similique tempora tenetur totam voluptate!'}
        likesCount={10}
      />
      <AddedPost
        messageInPost={'Cool'}
        likesCount={2}
      />
    </div>
  );
};

export default Posts;