import React from 'react'

import style from './Post.module.css'

const Post = (prorps) => {
    return (
        <div className={style.item}>
            <img className={style.avatar} src='https://bipbap.ru/wp-content/uploads/2017/09/5114e7b13c84a77355cbec162ca7ff45.jpg' />
            post #{prorps.number}
            {prorps.message}
            <span className={style.like}>Like</span>
            {prorps.likeCounts}
        </div>
    );
}

export default Post;
