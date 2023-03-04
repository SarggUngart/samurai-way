import React from 'react';
import style from './Nav.module.css'

let activeLink = `${style.link} ${style.active}`

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.navList}>
        <li><a className={activeLink} href="src/components#">Profile</a></li>
        <li><a className={style.link} href="src/components#">Messages</a></li>
        <li><a className={style.link} href="src/components#">News</a></li>
        <li><a className={style.link} href="src/components#">Music</a></li>
        <li><a className={style.link} href="src/components#">Settings</a></li>
      </ul>
    </nav>
  );
};

export default Nav;