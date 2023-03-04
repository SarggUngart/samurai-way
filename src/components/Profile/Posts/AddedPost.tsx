import React from 'react';
import style from './AddedPost.module.css'

const AddedPost = () => {
  return (
    <div className={style.posts}>
      <div className={style.post}>Post 1</div>
      <div className={style.post}>Post 1</div>

    </div>
  );
};

export default AddedPost;