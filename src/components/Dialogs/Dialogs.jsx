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

    let dialogs = [
        { id: 1, name: 'Dmitrii' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
    ]
    let messages = [
        { id: 1, message: 'Hi' },
        { id: 1, message: 'How are you?' },
        { id: 1, message: 'Bye' },
        { id: 1, message: 'Yo' },
        { id: 1, message: 'Yo' },
    ]

    let dialogsElements  = dialogs.map( d => <DialogItem name={ d.name } id={ d.id } /> )
    let messagesElements = messages.map( m => <Message message={ m.message } /> )

    return (
        <div className={ classes.dialogs }>
            <div className={ classes.dialogItems }>
                { dialogsElements }
            </div>
            <div className={ classes.messages }>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs
