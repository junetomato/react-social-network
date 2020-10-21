import React from 'react'
import StoreContext from '../../../StoreContext'
import Friends from './Friends'

function FriendsContainer() {
    return (
        <StoreContext.Consumer>
            { store => {
                let friends = store.getState().sidebar.friends

                return <Friends friends={ friends } />
            }}
        </StoreContext.Consumer>
    )
}

export default FriendsContainer
