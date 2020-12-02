import React, {useContext} from 'react'
import {GetUserData} from './CustomHooks/getUserData'
import {StateContext} from './StateContext'


function Home() {
    GetUserData()
    const {state, dispatch} = useContext(StateContext)
    return (
        <div>
            <h1> {state.username}'s Homepage</h1>
        </div>
    )
}

export default Home
