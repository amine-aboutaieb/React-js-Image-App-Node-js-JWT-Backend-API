import React, {useContext} from 'react'
import {VerifyToken} from './CustomHooks/verifyToken'
import {StateContext} from './StateContext'

function Camera({history}) {
    const {state, dispatch} = useContext(StateContext)
    VerifyToken(history, state, dispatch)
    return (
        <div>
           <h1>Camera App</h1> 
        </div>
    )
}

export default Camera
