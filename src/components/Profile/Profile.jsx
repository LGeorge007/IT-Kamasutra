import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import style from './Profile.module.css'

const Profile = () => {
    return (
        <div className={style.content}>
        <p>
          Это контент
        </p>
        <div>
          <img className={style.profileLogo} src="https://html5css.ru/css/img_lights.jpg"/>
        </div>
        <div>
          ava + description
        </div>
        <MyPosts />
      </div>
    );
}

export default Profile;
