import React from 'react'
import Friend from './Friend/Friend'
import classes from './Friends.module.css'

function Friends( props ) {
    let friends = props.friends.map( p => <Friend name={ p.name } avatar={ p.avatar } /> )

    return (
        <div>
            <h3>Friends</h3>
            <div className={ classes.friendList }>
                { friends }
            </div>
        </div>
    )
}

export default Friends
