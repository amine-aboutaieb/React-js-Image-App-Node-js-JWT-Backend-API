import React, {useContext} from 'react'
import {GetUserData} from './CustomHooks/getUserData'
import {StateContext} from './StateContext'


function Home() {
    GetUserData()
    const {state, dispatch} = useContext(StateContext)
    return (
        <div>
            <h2 className="homeTitle"> <span className="homeTitlep1">{state.username}'s</span> Homepage</h2>
        </div>
    )
}

export default Home
