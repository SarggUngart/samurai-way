import React from 'react';
import Button from "../../../Button/Button";
import style from './NewPostForm.module.css'
import {ActionsType, } from "../../../../redux/state";
import {addPostAC, updatePostAC} from "../../../../redux/profile-reducer";

type NewPostFormType = {
  newPostText: string
  dispatch: (action: ActionsType) => void
}

const NewPostForm: React.FC<NewPostFormType> = (props) => {
    let {dispatch, newPostText} = props


    const onClickAddPostHandler = () => {
      if (newPostText.length > 0)
        dispatch(addPostAC())
    }

    const onChangeNewTextHandler = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(updatePostAC(e.currentTarget.value))
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