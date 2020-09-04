import React from 'react'
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

function DialogItem( props ) {
    let path = "/dialogs/" + props.id;

    return (
        <div className={ `${ classes.dialog } ${ classes.active }` }>
            <NavLink to={ path } >{ props.name }</NavLink>
        </div>
    )
}

function Message( props ) {
    return (
        <div className={ classes.message }>{ props.message }</div>
    )
}

function Dialogs( props ) {
    return (
        <div className={ classes.dialogs }>
            <div className={ classes.dialogItems }>
                <DialogItem name="Dmitrii" id="1" />
                <DialogItem name="Andrey" id="2" />
                <DialogItem name="Sveta" id="3" />
                <DialogItem name="Sasha" id="4" />
                <DialogItem name="Viktor" id="5" />
                <DialogItem name="Valera" id="6" />
            </div>
            <div className={ classes.messages }>
                <Message message="Hi" />
                <Message message="How are you?" />
                <Message message="Bye" />
                <Message message="Yo" />
                <Message message="Yo" />
            </div>
        </div>
    )
}

export default Dialogs
