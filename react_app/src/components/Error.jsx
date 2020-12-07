import React, {useContext} from 'react'
import {StateContext} from './StateContext'
import {GetUserData} from './CustomHooks/getUserData'

function Error({location}) {
    GetUserData()
    return (
        <div id="error404">
            <h1>Error 404</h1>
            <h3> {location.pathname} not found</h3>
        </div>
    )
}

export default Error