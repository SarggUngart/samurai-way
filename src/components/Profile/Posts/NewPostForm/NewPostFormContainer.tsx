import React from 'react';
import {StoreType,} from "../../../../redux/state";
import {addPostAC, updatePostAC} from "../../../../redux/profile-reducer";
import NewPostForm from "./NewPostForm";

type NewPostFormType = {
  newPostText: string
  store: StoreType
}

export const NewPostFormContainer: React.FC<NewPostFormType> = (props) => {
    let {store, newPostText} = props


    const onClickAddPostHandler = () => {
      if (newPostText.length > 0)
        store.dispatch(addPostAC())
    }

    const onChangeNewTextHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      store.dispatch(updatePostAC(e.currentTarget.value))
    }


    return (
      <NewPostForm newPostText={newPostText}
                   addPost={onClickAddPostHandler}
                   updatePostText={onChangeNewTextHandler}/>
    );
  }
;
