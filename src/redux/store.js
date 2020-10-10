let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It\'s my first post', likesCount: 11 },
            ],
            newPostText: '',
            addPost() {
                let newPost = {
                    id: 5,
                    message: this.newPostText,
                    likesCount: 0,
                }
                this.posts.push( newPost )
                this.newPostText = ''
                store.rerenderEntireTree( store )
            },
            updateNewPostText( newText ) {
                this.newPostText = newText
                store.rerenderEntireTree( store )
            },
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
            messageText: '',
            updateMessageText( text ) {
                this.messageText = text
                store.rerenderEntireTree( store )
            },
            sendMessage () {
                let newMessage = {
                    id: 6,
                    message: this.messageText,
                    type: 'me',
                }
                this.messages.push( newMessage )
                this.messageText = ''
                store.rerenderEntireTree( store )
            },
        },
        sidebar: {
            friends: [
                { id: 2, name: 'Andrey', avatar: 'https://avatarfiles.alphacoders.com/119/119747.jpg' },
                { id: 3, name: 'Sveta', avatar: 'https://avatarfiles.alphacoders.com/119/119747.jpg' },
                { id: 4, name: 'Sasha', avatar: 'https://avatarfiles.alphacoders.com/119/119747.jpg' },
            ]
        }
    },
    getSidebarData() {
        return this._state.sidebar
    },
    getProfilePageData() {
        return this._state.profilePage
    },
    getDialogsPage() {
        return this._state.dialogsPage
    },
    rerenderEntireTree() {
        console.log( 'rerender ^_^' )
    },
    subscribe( observer ) {
        this.rerenderEntireTree = observer
    },
}

window.store = store;

export default store
