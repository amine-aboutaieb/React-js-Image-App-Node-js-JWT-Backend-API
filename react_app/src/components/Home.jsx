import React, {useContext} from 'react'
import {VerifyToken} from './CustomHooks/verifyToken'
import {StateContext} from './StateContext'


function Home({history}) {
    const {state, dispatch} = useContext(StateContext)
    VerifyToken(history, state, dispatch)
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home
