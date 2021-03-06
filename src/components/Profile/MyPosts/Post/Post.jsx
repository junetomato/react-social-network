import React from 'react'
import classes from './Post.module.css'

function Post( props ) {
    return (
        <div className={ classes.item }>
            <img src="http://4.bp.blogspot.com/-Jx21kNqFSTU/UXemtqPhZCI/AAAAAAAAh74/BMGSzpU6F48/s1600/funny-cat-pictures-047-001.jpg" alt=""/>
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )
}

export default Post
