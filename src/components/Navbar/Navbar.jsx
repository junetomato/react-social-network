import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends'

function Navbar( props ) {
    return (
        <nav className={ classes.nav }>
            <div className={ `${ classes.item } ${ classes.active }` }>
                <NavLink to='/profile' activeClassName={ classes.active_link }>Profile</NavLink>
            </div>
            <div className={ classes.item }>
                <NavLink to='/dialogs' activeClassName={ classes.active_link }>Messages</NavLink>
            </div>
            <div className={ classes.item }>
                <NavLink to='/news' activeClassName={ classes.active_link }>News</NavLink>
            </div>
            <div className={ classes.item }>
                <NavLink to='/music' activeClassName={ classes.active_link }>Music</NavLink>
            </div>
            <div className={ classes.item }>
                <NavLink to='/settings' activeClassName={ classes.active_link }>Settings</NavLink>
            </div>
            <Friends friends={ props.state.friends } />
        </nav>
    )
}

export default Navbar
