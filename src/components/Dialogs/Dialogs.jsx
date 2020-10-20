import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

function Dialogs( props ) {
    let state = props.dialogsPage

    let dialogsElements  = state.dialogs.map( d => <DialogItem name={ d.name } id={ d.id } avatar={ d.avatar } /> )
    let messagesElements = state.messages.map( m => <Message message={ m.message } type={ m.type } /> )

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = ( e ) => {
        let body = e.target.value
        props.updateNewMessageBody( body )
    }

    return (
        <div className={ classes.dialogs }>
            <div className={ classes.dialogItems }>
                { dialogsElements }
            </div>
            <div>
                <div className={ classes.messages }>
                    { messagesElements }
                </div>
                <div>
                    <div>
                        <textarea
                            value={ state.newMessageBody }
                            onChange={ onNewMessageChange }
                            placeholder='Enter your message'
                        />
                    </div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
