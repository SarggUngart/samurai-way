import React from 'react';
import style from './PostList.module.css'
import avaPost from '../../../../assets/img/avatar.jpeg'
import like from '../../../../assets/img/like.png'
import {PostListPropsType} from "./PostsListContainer";


const PostList: React.FC<PostListPropsType> = (props) => {
  const postListData = props.postListData

  return (<>
      {
        postListData.map(posts => {

          return (
            <React.Fragment key={posts.id}>
              <div className={style.posts}>
                <div className={style.post}>
                  <img className={style.avaPost} src={avaPost} alt="ava_post"/>
                  <div className={style.postWrapper}>
                    <div className={style.text}>
                      {posts.postText}
                    </div>
                    <div className={style.likeWrapper}>
                      <img className={style.heart} src={like} alt=""/><span className={style.like}>
            {posts.likesCount}
          </span>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
        })
      }


    </>
  );
};

export default PostList;