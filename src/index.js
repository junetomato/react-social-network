import './index.css'
import * as serviceWorker from './serviceWorker'
import state, { subscribe } from './redux/state'
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

rerenderEntireTree( state )

subscribe( rerenderEntireTree )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
