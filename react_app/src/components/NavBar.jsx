import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            {
                (localStorage.getItem('token') !== null) ?
                <>
                    <Link to="/">Home</Link>
                    <Link to="/camera">Camera</Link>
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
