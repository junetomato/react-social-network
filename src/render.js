import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { addPost, sendMessage, updateMessageText, updateNewPostText } from './redux/state'

let rerenderEntireTree = ( state ) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={ state }
                    addPost={ addPost }
                    updateNewPostText={ updateNewPostText }
                    updateMessageText={ updateMessageText }
                    sendMessage={ sendMessage }
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById( 'root' )
    );
}

export default rerenderEntireTree
