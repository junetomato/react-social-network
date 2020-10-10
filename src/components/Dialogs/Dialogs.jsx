import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

function Dialogs( props ) {
    let dialogsElements  = props.dialogsPage.dialogs.map( d => <DialogItem name={ d.name } id={ d.id } avatar={ d.avatar } /> )
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={ m.message } type={ m.type } /> )

    let messageElement = React.createRef()

    let updateMessageText = () => {
        let text = messageElement.current.value
        props.dialogsPage.updateMessageText( text )
    }

    return (
        <div className={ classes.dialogs }>
            <div className={ classes.dialogItems }>
                { dialogsElements }
            </div>
            <div className={ classes.messages }>
                { messagesElements }
            </div>
            <div>
                <textarea
                    ref={ messageElement }
                    value={ props.dialogsPage.messageText }
                    onChange={ updateMessageText }
                />
                <button type="button" onClick={ () => props.dialogsPage.sendMessage() }>Send</button>
            </div>
        </div>
    )
}

export default Dialogs
