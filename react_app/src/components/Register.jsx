import React from 'react'
import {CheckAuth} from './CustomHooks/checkToken'

function Register({history}) {
    CheckAuth(history)
    return (
        <>
            <h3>Register</h3>
            <form style={{display:"flex", alignItems:"center"}}>
                <input type="text" placeholder="Username..." />
                <input type="text" placeholder="Email..." />
                <input type="text" placeholder="Password..." />
                <button>Register</button>
            </form>
        </>
    )
}

export default Register