import React from 'react'
import classes from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

function DialogItem( props ) {
    let path = "/dialogs/" + props.id;

    return (
        <div>
            <NavLink className={ classes.userItem } activeClassName={ classes.active } to={ path } >{ props.name }</NavLink>
        </div>
    )
}

export default DialogItem
