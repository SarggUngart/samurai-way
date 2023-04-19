import React from 'react';
import PostList from "./PostList/PostList";
import {PostsDataType} from "../../../redux/state";
import {NewPostFormContainer} from "./NewPostForm/NewPostFormContainer";
import StoreContext from "../../../redux/StoreContext";
import {addPostAC, updatePostAC} from "../../../redux/profile-reducer";

type PostsPropsType = {
  postsData: PostsDataType[]
}

const Posts: React.FC<PostsPropsType> = (props) => {
  const {postsData,} = props

  return (
    <div>
      <StoreContext.Consumer>{
        (store) => {

          const addPost = () => {
            store.dispatch(addPostAC())
          }
          const updatePostText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            store.dispatch(updatePostAC(e.currentTarget.value))
          }

          return <NewPostFormContainer
            newPostText={store.getState().profileReducer.newPostText}
            addPost={addPost}
            updatePostText={updatePostText}
          />
        }
      }
      </StoreContext.Consumer>


      {postsData.map(p =>
        <PostList key={p.id} id={p.id} messageInPost={p.postText} likesCount={p.likesCount}/>
      )}
    </div>
  );
};

export default Posts;