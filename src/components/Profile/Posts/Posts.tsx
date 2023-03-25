import React from 'react';
import NewPost from "./NewPost/NewPost";
import AddedPost from "./AddedPost/AddedPost";

type postDataType = {
  id: number
  postText: string
  likesCount: number
}

const postsData: postDataType[] = [
  {
    id: 1,
    postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate nam non quae quia repudiandae rerum voluptates voluptatum!',
    likesCount: 10
  }, {
    id: 2,
    postText: 'Architecto cupiditate delectus, deleniti, facilis, minima praesentium recusandae similique tempora tenetur totam voluptate!',
    likesCount: 2
  }
]


const Posts = () => {
  return (
    <div>
      <NewPost/>
      {postsData.map(p =>
        <AddedPost id={p.id} messageInPost={p.postText} likesCount={p.likesCount}/>
      )}
  </div>
  );
};

export default Posts;