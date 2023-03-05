import React from 'react';
import style from './AddedPost.module.css'
import avaPost from '../../../../assets/img/avatar.jpeg'
import like from '../../../../assets/img/like.png'

type AddedPostPropsType = {
  messageInPost: string
  likesCount: number
}

const AddedPost: React.FC<AddedPostPropsType> = (props) => {
  const {messageInPost, likesCount} = props

  return (
    <div className={style.posts}>
      <div className={style.post}>
        <img className={style.avaPost} src={avaPost} alt="ava_post"/>
        <div className={style.postWrapper}>
          <div className={style.text}>
            {messageInPost}
          </div>
          <div className={style.likeWrapper}>
            <img className={style.heart} src={like} alt=""/><span className={style.like}>
            {likesCount}
          </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedPost;