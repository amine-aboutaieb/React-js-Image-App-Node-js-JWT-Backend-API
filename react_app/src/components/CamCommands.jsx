import React, { useEffect, useRef } from 'react'

function CamCommands({state, vidContainer, camVid}) {
    
    const containRef = useRef()
    const coverRef = useRef()
    const fillRef = useRef()

    const toggleFullScreen = (elm)=>{
        if(document.fullscreenElement !== null){
            document.exitFullscreen()
        }else{
            state.setFullScreen(elm.current)
        }
    }
    const takePicture = ()=>{
        let canvas = document.createElement('canvas')
        canvas.width = 650
        canvas.height = 500
        let ctx = canvas.getContext("2d")
        ctx.drawImage(camVid.current, 0, 0, canvas.width, canvas.height)
        let imageData = canvas.toDataURL()
        camVid.current.pause()
        setTimeout(()=>{
            state.setImageViewerOn(true)
            state.setImageViewerData(imageData)
            state.setCamOn(false)
        },1000)
    }

    const handleCloseCamera = ()=>{
        state.setCamOn(false)
        state.setCamOnBtn(true)
        camVid.current.pause()
    }

    return (
        <>
            <div id="camVidCommandsContainer">
                <button onClick={()=>{state.setCamMode("contain")}} className="optBtn" ref={containRef}>contain</button>
                <button onClick={()=>{state.setCamMode("cover")}} className="optBtn" ref={coverRef}>cover</button>
                <button onClick={()=>{state.setCamMode("fill")}} className="optBtn" ref={fillRef}>fill</button>
                <button className="optBtn" onClick={()=>{toggleFullScreen(vidContainer)}}>fullscreen</button>
            </div>
            <button id="camVidCloseBtn" onClick={handleCloseCamera} className="optBtn">X</button>
            <div id="takePictureBtn" onClick={takePicture}></div>
        </>
    )
}

export default CamCommands
