import React from 'react'

function CamCommands({state, vidContainer}) {

    const toggleFullScreen = (elm)=>{
        if(document.fullscreenElement !== null){
            document.exitFullscreen()
        }else{
            state.setFullScreen(elm.current)
        }
    }
    
    return (
        <>
            <div id="camVidCommandsContainer">
                <button onClick={()=>{state.setCamMode("contain")}} className="optBtn">contain</button>
                <button onClick={()=>{state.setCamMode("cover")}} className="optBtn">cover</button>
                <button onClick={()=>{state.setCamMode("fill")}} className="optBtn">fill</button>
                <button className="optBtn" onClick={()=>{toggleFullScreen(vidContainer)}}>fullscreen</button>
            </div>
            <button id="camVidCloseBtn" onClick={()=>{state.setCamOn(false)}} className="optBtn">X</button>
        </>
    )
}

export default CamCommands
