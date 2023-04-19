import React from 'react';
import style from './Friends.module.css'
import {ReducersRootState} from "../../redux/redux-store";

type FriendsDataPropsType = {
  state: ReducersRootState
}

const Friends: React.FC<FriendsDataPropsType> = (props) => {
  const {state} = props

  return (<React.Fragment>
      {state.friendsReducer.friendsData.map(f => {
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