import React from 'react';
import style from './PostList.module.css'
import avaPost from '../../../../assets/img/avatar.jpeg'
import like from '../../../../assets/img/like.png'

type PostListPropsType = {
  id:number
  messageInPost: string
  likesCount: number
}

const PostList: React.FC<PostListPropsType> = (props) => {
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

export default PostList;