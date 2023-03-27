import React from 'react';
import Button from "../../../Button/Button";
import style from './NewPostForm.module.css'

type NewPostFormType = {
  addPost: (postText: string) => void
}

const NewPostForm: React.FC<NewPostFormType> = (props) => {
  const {addPost} = props

  const newTextRef = React.createRef<HTMLTextAreaElement>()

  const onClickAddPostHandler = () => {
    if (newTextRef.current) {
      addPost(newTextRef.current.value)
      newTextRef.current.value = ''
    }
  }

  return (
    <div>
      <h3 className={style.title}>My Posts</h3>
      <div className={style.newPost}>
        <textarea ref={newTextRef} className={style.text}/>
        <Button name={'add'} callBack={onClickAddPostHandler}/>
      </div>

    </div>
  );
};

export default NewPostForm;