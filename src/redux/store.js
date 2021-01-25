import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

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
        this._state.profilePage = profileReducer( this._state.profilePage, action )
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action )
        this._state.sidebar = sidebarReducer( this._state.sidebar, action )

        this._callSubscriber( this._state )
    }
}

window.store = store
export default store
