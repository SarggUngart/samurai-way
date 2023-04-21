import React from 'react';
import style from './Users.module.css'
import {UsersPageType} from "../../redux/state";

type UsersDataPropsType = {
  state: UsersPageType
}

const Users: React.FC<UsersDataPropsType> = (props) => {
  const {state} = props

  return (<React.Fragment>
      {state.friendsData.map(f => {
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

export default Users;