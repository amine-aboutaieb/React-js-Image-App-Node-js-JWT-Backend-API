import React from 'react'

function HomeImagePlayer({imageData, setShowPlayer, handleLeftBtn, handleRightBtn}) {
    const closePlayer = (e)=>{
        if(e.target === e.currentTarget){
            setShowPlayer(false)
        }
    }
    return (
        <div id="homeImagePlayer" onClick={closePlayer}>
            <button id="camVidCloseBtn" onClick={closePlayer} className="optBtn">X</button>
            <button onClick={handleLeftBtn} className="optBtn leftImg">Left</button>
            <img src={imageData} id="imagePlayerImg"/>
            <button onClick={handleRightBtn} className="optBtn rightImg">Right</button>
        </div>
    )
}

export default HomeImagePlayer
