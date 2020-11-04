import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer'
import Users from './Users'

function mapStateToProps( state ) {
    return {
        users: state.usersPage.users
    }
}

function mapDispatchToProps( dispatch ) {
    return {
        follow: ( userID ) => {
            dispatch( followAC( userID ) )
        },
        unfollow: ( userID ) => {
            dispatch( unfollowAC( userID ) )
        },
        setUsers: ( users ) => {
            dispatch( setUsersAC( users ) )
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps ) ( Users )
