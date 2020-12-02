import React, {useContext} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {StateContext} from './StateContext'

function NavBar() {
    const {state} = useContext(StateContext)
    return (
        <nav className="navBar">
            {
                (state.id !== null && state.username !== null && state.email !== null) ?
                <>
                    <NavLink to="/" exact activeClassName="active">Home</NavLink>
                    <NavLink to="/camera" activeClassName="active">Camera</NavLink>
                    <NavLink to="/logout" activeClassName="active">Logout</NavLink>
                </>
                :
                <>
                    <NavLink to="/login" activeClassName="active">Login</NavLink>
                    <NavLink to="/register" activeClassName="active">Register</NavLink>
                </>
            }
        </nav>
    )
}

export default NavBar
