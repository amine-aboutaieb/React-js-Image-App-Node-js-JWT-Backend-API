import React, {useContext, useState} from 'react'
import {StateContext} from './StateContext'
import {GetUserData} from './CustomHooks/getUserData'
import Cam from './Cam'

function Camera() {
    GetUserData()
    const {state, dispatch} = useContext(StateContext)
    const [camOn, setCamOn] = useState(false)
    const [camMode, setCamMode] = useState("contain")

    const setFullScreen = (elm)=>{
        if(elm.requestFullscreen){
            elm.requestFullscreen()
        }     
    }
    return (
        <div id="CameraWrapper">
            {(camOn) && <Cam state={{camOn, setCamOn, camMode, setCamMode, setFullScreen}} />}
            <button onClick={()=>{setCamOn(true)}} id="camOn">Turn on camera</button>
        </div>
    )
}

export default Camera
