import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {StateContext} from './StateContext'

function NavBar() {
    const {state} = useContext(StateContext)
    return (
        <nav>
            {
                (state.id !== null && state.username !== null && state.email !== null) ?
                <>
                    <Link to="/">Home</Link>
                    <Link to="/camera">Camera</Link>
                    <Link to="/logout">Logout</Link>
                </>
                :
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            }
        </nav>
    )
}

export default NavBar
