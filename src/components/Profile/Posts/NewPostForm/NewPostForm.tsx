import React from 'react';
import Button from "../../../Button/Button";
import style from './NewPostForm.module.css'

type NewPostFormType = {
  newPostText: string
  addPost: () => void
  updateNewPost: (newPostText: string) => void
}

const NewPostForm: React.FC<NewPostFormType> = (props) => {
    let {addPost, updateNewPost, newPostText} = props


    const onClickAddPostHandler = () => {
      addPost()
    }

    const onChangeNewTextHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      updateNewPost(e.currentTarget.value)
    }


    return (
      <div>
        <h3 className={style.title}>My Posts</h3>
        <div className={style.newPost}>
          <textarea value={newPostText} onChange={onChangeNewTextHandler} className={style.text}/>
          <Button name={'add'} callBack={onClickAddPostHandler}/>
        </div>

      </div>
    );
  }
;

export default NewPostForm;