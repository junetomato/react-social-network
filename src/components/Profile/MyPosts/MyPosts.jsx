import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts( props ) {
    let postsElements = props.postsData.posts.map( p => <Post message={ p.message } likesCount={ p.likesCount } /> )

    let newPostElement = React.createRef()

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText( text )
    }

    return (
        <div className={ classes.postsBlock }>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.postsData.newPostText } />
                </div>
                <div>
                    <button onClick={ props.addPost }>Add post</button>
                </div>
            </div>
            <div className={ classes.posts }>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts
