import React from 'react'
import s from './Post.module.css'

function Post( props ) {
    return (
        <div className={ s.item }>
            <img src="http://4.bp.blogspot.com/-Jx21kNqFSTU/UXemtqPhZCI/AAAAAAAAh74/BMGSzpU6F48/s1600/funny-cat-pictures-047-001.jpg" alt=""/>
            { props.message }
            <div>
                <span>{ props.likes } likes</span>
            </div>
        </div>
    )
}

export default Post
