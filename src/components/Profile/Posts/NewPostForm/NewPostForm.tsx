import React from 'react';
import Button from "../../../Button/Button";
import style from './NewPostForm.module.css'

const NewPostForm = () => {
  return (
    <div>
      <h3 className={style.title}>My Posts</h3>
      <div className={style.newPost}>
        <textarea className={style.text}/>
        <Button name={'add'} callBack={() => {
        }}/>
      </div>

    </div>
  );
};

export default NewPostForm;