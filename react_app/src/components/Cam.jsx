import React, { useEffect, useRef} from 'react'
import CamCommands from './CamCommands'
import defaultCameraImg from '../images/cameraDef.jpg'

function Cam({state}) {

    const vidRef = useRef()
    const vidContainer = useRef()
    let stopStream = null
    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({video : true}).then((stream)=>{
            vidRef.current.srcObject = stream
            vidRef.current.play()
            state.setFullScreen(vidContainer.current)
            stopStream = ()=>{
                stream.getTracks().forEach((track)=>{
                    track.stop()
                })
            }
        }).catch((error)=>{
            alert("A camera error has occured")
            console.log(error);
        })
        return ()=>{
            stopStream()
        }
    },[])

    return (
        <div id="camVidContainer" ref={vidContainer}>
            <video id="camVid" ref={vidRef} style={{objectFit:state.camMode}} poster={defaultCameraImg}></video>
            <CamCommands state={state} vidContainer={vidContainer} camVid={vidRef} />
        </div>
    )
}

export default Cam
