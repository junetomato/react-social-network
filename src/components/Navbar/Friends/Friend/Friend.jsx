import React from 'react'
import classes from './Friend.module.css'

function Friend( props ) {
    return (
        <div className={ classes.user }>
            <img src={ props.avatar } alt="" className={ classes.photo } />
            <div>{ props.name }</div>
        </div>
    )
}

export default Friend
