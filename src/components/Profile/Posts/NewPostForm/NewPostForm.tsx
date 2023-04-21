import React from 'react';
import Button from "../../../Button/Button";
import style from './NewPostForm.module.css'
import {NewPostFormType} from "./NewPostFormContainer";


const NewPostForm: React.FC<NewPostFormType> = (props) => {
    let {addPost, updatePost, newPostText} = props


    return (
      <div>
        <h3 className={style.title}>My Posts</h3>
        <div className={style.newPost}>
          <textarea value={newPostText}
                    onChange={(e) => updatePost(e.currentTarget.value)} className={style.text}/>
          <Button name={'add'} callBack={() => addPost()}/>
        </div>

      </div>
    );
  }
;

export default NewPostForm;