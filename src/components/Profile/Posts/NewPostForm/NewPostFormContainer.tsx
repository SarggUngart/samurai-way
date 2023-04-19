import React from 'react';
import NewPostForm from "./NewPostForm";

type NewPostFormContainerType = {
  newPostText: string
  addPost: () => void
  updatePostText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const NewPostFormContainer: React.FC<NewPostFormContainerType> = (props) => {
    let {newPostText, addPost, updatePostText} = props


    const onClickAddPostHandler = () => {
      if (newPostText.length > 0)
        addPost()
    }


    return (
      <NewPostForm newPostText={newPostText}
                   addPost={onClickAddPostHandler}
                   updatePostText={updatePostText}/>
    );
  }
;
