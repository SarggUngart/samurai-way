import React from 'react';
import Button from "../../../Button/Button";
import style from './NewPostForm.module.css'
import {NewPostFormType} from "./NewPostFormContainer";


const NewPostForm: React.FC<NewPostFormType> = (props) => {
    let {addPost, updatePost, newPostText} = props

    const onChangePost = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      updatePost(e.currentTarget.value)
    }

    const onClickAddPost = () => {
      if (!newPostText) return
      addPost()
    }

    return (
      <div>
        <h3 className={style.title}>My Posts</h3>
        <div className={style.newPost}>
          <textarea

            value={newPostText}
            onChange={onChangePost}
            className={style.text}/>
          <Button name={'add'} callBack={onClickAddPost}/>
        </div>

      </div>
    );
  }
;

export default NewPostForm;