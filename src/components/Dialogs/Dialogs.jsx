import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

function Dialogs( props ) {
    let dialogsElements  = props.state.dialogs.map( d => <DialogItem name={ d.name } id={ d.id } avatar={ d.avatar } /> )
    let messagesElements = props.state.messages.map( m => <Message message={ m.message } type={ m.type } /> )

    let sendMessage = () => {
        let messageText = messageElement.current.value
        alert( messageText )
    }

    let messageElement = React.createRef()

    return (
        <div className={ classes.dialogs }>
            <div className={ classes.dialogItems }>
                { dialogsElements }
            </div>
            <div className={ classes.messages }>
                { messagesElements }
            </div>
            <div>
                <textarea ref={ messageElement }></textarea>
                <button type="button" onClick={ sendMessage }>Send</button>
            </div>
        </div>
    )
}

export default Dialogs
