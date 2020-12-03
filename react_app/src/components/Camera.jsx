import React, {useContext, useState} from 'react'
import {StateContext} from './StateContext'
import {GetUserData} from './CustomHooks/getUserData'
import Cam from './Cam'
import ImageViewer from './ImageViewer'

function Camera() {
    GetUserData()
    const {state, dispatch} = useContext(StateContext)
    const [camOnBtn, setCamOnBtn] = useState(true)
    const [camOn, setCamOn] = useState(false)
    const [camMode, setCamMode] = useState("contain")
    const [imageViewerOn, setImageViewerOn] = useState(false)
    const [imageViewerData, setImageViewerData] = useState(null)

    const setFullScreen = (elm)=>{
        if(elm.requestFullscreen){
            elm.requestFullscreen()
        }     
    }
    const turnOnCamera = ()=>{
        setCamOnBtn(false)
        setCamOn(true)
    }
    return (
        <div id="CameraWrapper">
            {(camOn) && <Cam state={{camOn, setCamOn, camMode, setCamMode, setFullScreen, setImageViewerOn, setImageViewerData, setCamOnBtn}} />}
            {(camOnBtn) && <button onClick={turnOnCamera} id="camOn">Turn on camera</button>}
            {(imageViewerOn) && <ImageViewer state={{setCamOn, setImageViewerOn}} data={imageViewerData} />}
        </div>
    )
}

export default Camera
