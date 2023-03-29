import React from 'react';
import Button from "../../../Button/Button";
import style from './NewPostForm.module.css'

type NewPostFormType = {
  addPost: () => void
  newPostText: string
  updateNewPost: (newPostText: string) => void
}

const NewPostForm: React.FC<NewPostFormType> = (props) => {
  let {addPost, updateNewPost, newPostText} = props

  const newTextRef = React.createRef<HTMLTextAreaElement>()

  const onClickAddPostHandler = () => {
    if (newTextRef.current && newTextRef.current.value !== '') {
      addPost()
    }
  }

  const onChangeHandler = () => {
    if (newTextRef.current) {
      let newText = newTextRef.current.value
      updateNewPost(newText)
    }
  }

  return (
    <div>
      <h3 className={style.title}>My Posts</h3>
      <div className={style.newPost}>
        <textarea value={newPostText} onChange={onChangeHandler} ref={newTextRef} className={style.text}/>
        <Button name={'add'} callBack={onClickAddPostHandler}/>
      </div>

    </div>
  );
};

export default NewPostForm;