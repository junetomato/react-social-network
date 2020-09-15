import React from 'react'
import classes from './Message.module.css'

function Message( props ) {
    let typeClass = props.type === 'me' ? classes.me : classes.person

    return (
        <div className={ `${ classes.message } ${ typeClass }` }>{ props.message }</div>
    )
}

export default Message
