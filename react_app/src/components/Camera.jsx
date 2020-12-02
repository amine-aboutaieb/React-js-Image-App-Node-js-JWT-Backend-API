import React, {useContext} from 'react'
import {StateContext} from './StateContext'
import {GetUserData} from './CustomHooks/getUserData'

function Camera() {
    GetUserData()
    const {state, dispatch} = useContext(StateContext)
    return (
        <div>
           <h1>Camera App</h1> 
        </div>
    )
}

export default Camera
