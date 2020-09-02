import React from 'react'
import classes from './Dialogs.module.css'

function Dialogs( props ) {
    return (
        <div className={ classes.dialogs }>
            <div className={ classes.dialogItems }>
                <div className={ `${ classes.dialog } ${ classes.active }` }>Dmitrii</div>
                <div className={ classes.dialog }>Andrey</div>
                <div className={ classes.dialog }>Sveta</div>
                <div className={ classes.dialog }>Sasha</div>
                <div className={ classes.dialog }>Viktor</div>
                <div className={ classes.dialog }>Valera</div>
            </div>
            <div className={ classes.messages }>
                <div className={ classes.message }>Hi</div>
                <div className={ classes.message }>How are you?</div>
                <div className={ classes.message }>Bye</div>
            </div>
        </div>
    )
}

export default Dialogs
