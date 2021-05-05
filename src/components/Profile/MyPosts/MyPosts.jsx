import React from 'react'
import Post from './Post/Post'

import style from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={style.blockPosts}>
            My Posts
            <div>
                <textarea></textarea>
                <button> Add post </button>
                <button> Remove </button>
            </div>
            <div>
                <div className={style.posts}>
                    <Post number='1' message='Hi, Hitler' likeCounts='120' />
                    <Post number='2' message='Hi, how area YOu' likeCounts='50'/>
                    <Post number='3' message="I' m fine thank you"/>
                    <Post number='4' message='Idid na huoi'/>
                    <Post number='5' message='Sam  takoy'/>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;
