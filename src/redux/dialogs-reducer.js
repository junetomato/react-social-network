const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
    dialogs: [
        { id: 1, name: 'Dmitrii', avatar: 'https://avatarfiles.alphacoders.com/119/119747.jpg' },
        { id: 2, name: 'Andrey', avatar: 'https://avatarfiles.alphacoders.com/119/119747.jpg' },
        { id: 3, name: 'Sveta', avatar: 'https://avatarfiles.alphacoders.com/119/119747.jpg' },
        { id: 4, name: 'Sasha', avatar: 'https://avatarfiles.alphacoders.com/119/119747.jpg' },
        { id: 5, name: 'Viktor', avatar: 'https://avatarfiles.alphacoders.com/119/119747.jpg' },
        { id: 6, name: 'Valera', avatar: 'https://avatarfiles.alphacoders.com/119/119747.jpg' },
    ],
    messages: [
        { id: 1, message: 'Hi', type: 'person' },
        { id: 2, message: 'How are you?', type: 'me' },
        { id: 3, message: 'Bye', type: 'person' },
        { id: 4, message: 'Yo', type: 'me' },
        { id: 5, message: 'Yo', type: 'person' },
    ],
    newMessageBody: '',
}

function dialogsReducer( state = initialState, action ) {

    switch( action.type ) {
        case SEND_MESSAGE:
            let newMessageObj = {
                id: 6,
                message: state.newMessageBody,
                type: 'me',
            }
            return {
                ...state,
                newMessageBody: '',
                messages: [ ...state.messages, newMessageObj ]
            }

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }

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
