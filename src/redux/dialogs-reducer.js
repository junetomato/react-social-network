const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

function dialogsReducer( state, action ) {

    switch( action.type ) {
        case SEND_MESSAGE:
            let newMessageObj = {
                id: 6,
                message: state.newMessageBody,
                type: 'me',
            }
            state.messages.push( newMessageObj )
            state.newMessageBody = ''
            return state

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state

        default:
            return state
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = ( body ) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
})

export default dialogsReducer
