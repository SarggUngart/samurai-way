import React from 'react';
import style from './Friends.module.css'
import {friendsDataType} from "../../redux/state";

type FriendsDataPropsType = {
  friendsData: friendsDataType[]
}

const Friends: React.FC<FriendsDataPropsType> = (props) => {
  const {friendsData} = props

  return (<React.Fragment>
      {friendsData.map(f => {
        return (
          <div key={f.id} className={style.wrapper}>
            <div className={style.friendItem}>
              <img className={style.img} src={f.avatar} alt="friend_avatar"/>
              <div className={style.friendInfo}>
                <div className={style.name}>{f.name}</div>
                <div className={style.age}>age: {f.age}</div>
              </div>
            </div>
          </div>
        )
      })}
    </React.Fragment>
  );
};

export default Friends;