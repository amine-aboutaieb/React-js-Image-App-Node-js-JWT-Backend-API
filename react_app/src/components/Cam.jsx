import React, { useEffect, useRef} from 'react'
import CamCommands from './CamCommands'
import defaultCameraImg from '../images/cameraDef.jpg'

function Cam({state}) {

    const vidRef = useRef()
    const vidContainer = useRef()
    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({video : true}).then((stream)=>{
            vidRef.current.srcObject = stream
            vidRef.current.play()
            state.setFullScreen(vidContainer.current)
        })
    },[])

    return (
        <div id="camVidContainer" ref={vidContainer}>
            <video id="camVid" ref={vidRef} style={{objectFit:state.camMode}} poster={defaultCameraImg}></video>
            <CamCommands state={state} vidContainer={vidContainer} />
        </div>
    )
}

export default Cam
