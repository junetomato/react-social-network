const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It\'s my first post', likesCount: 11 },
            ],
            newPostText: '',
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                { id: 2, name: 'Andrey', avatar: 'https://avatarfiles.alphacoders.com/119/119747.jpg' },
                { id: 3, name: 'Sveta', avatar: 'https://avatarfiles.alphacoders.com/119/119747.jpg' },
                { id: 4, name: 'Sasha', avatar: 'https://avatarfiles.alphacoders.com/119/119747.jpg' },
            ]
        }
    },
    _callSubscriber() {
        console.log( 'rerender ^_^' )
    },

    getState() {
        return this._state
    },
    subscribe( observer ) {
        this._callSubscriber = observer
    },

    dispatch( action ) {
        switch( action.type ) {
            case ADD_POST:
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0,
                }
                this._state.profilePage.posts.push( newPost )
                this._state.profilePage.newPostText = ''
                this._callSubscriber( this._state )
                break;

            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber( this._state )
                break;

            case SEND_MESSAGE:
                let newMessageObj = {
                    id: 6,
                    message: this._state.dialogsPage.newMessageBody,
                    type: 'me',
                }
                this._state.dialogsPage.messages.push( newMessageObj )
                this._state.dialogsPage.newMessageBody = ''
                this._callSubscriber( this._state )
                break;

            case UPDATE_NEW_MESSAGE_BODY:
                this._state.dialogsPage.newMessageBody = action.body
                this._callSubscriber( this._state )
                break;

            default:
                break;
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = ( text ) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = ( body ) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
})

window.store = store;
export default store
