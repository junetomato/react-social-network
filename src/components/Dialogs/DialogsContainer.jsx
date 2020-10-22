import { connect } from 'react-redux'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

function mapStateToProps( state ) {
    return {
        dialogsPage: state.dialogsPage,
    }
}

function mapDispatchToProps( dispatch ) {
    return {
        updateNewMessageBody: ( body ) => {
            dispatch( updateNewMessageBodyCreator( body ) )
        },
        sendMessage: () => {
            dispatch( sendMessageCreator() )
        },
    }
}

const DialogsContainer = connect( mapStateToProps, mapDispatchToProps )( Dialogs )

export default DialogsContainer
