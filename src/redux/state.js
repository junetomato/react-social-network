import rerenderEntireTree from "../render"

let state = {
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
        messageText: '',
    },
    sidebar: {
        friends: [
            { id: 2, name: 'Andrey', avatar: 'https://avatarfiles.alphacoders.com/119/119747.jpg' },
            { id: 3, name: 'Sveta', avatar: 'https://avatarfiles.alphacoders.com/119/119747.jpg' },
            { id: 4, name: 'Sasha', avatar: 'https://avatarfiles.alphacoders.com/119/119747.jpg' },
        ]
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push( newPost )
    state.profilePage.newPostText = ''
    rerenderEntireTree( state )
}

export let updateNewPostText = ( newText ) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree( state )
}

export let updateMessageText = ( text ) => {
    state.dialogsPage.messageText = text
    rerenderEntireTree( state )
}

export let sendMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.messageText,
        type: 'me',
    }
    state.dialogsPage.messages.push( newMessage )
    state.dialogsPage.messageText = ''
    rerenderEntireTree( state )
}

export default state
