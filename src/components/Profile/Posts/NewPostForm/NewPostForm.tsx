import React from 'react';
import Button from "../../../Button/Button";
import style from './NewPostForm.module.css'

type NewPostFormType = {
  newPostText: string
  addPost: () => void
  updatePostText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const NewPostForm: React.FC<NewPostFormType> = (props) => {
    let {addPost, updatePostText, newPostText} = props


    return (
      <div>
        <h3 className={style.title}>My Posts</h3>
        <div className={style.newPost}>
          <textarea value={newPostText}
                    onChange={(e) => updatePostText(e)} className={style.text}/>
          <Button name={'add'} callBack={() => addPost()}/>
        </div>

      </div>
    );
  }
;

export default NewPostForm;